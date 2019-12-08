import * as path from 'path';
import * as fs from 'fs';
import { CoreRouter } from "../core/core.router";
import { Request, Response, NextFunction } from "express";
import { Event } from "../models/event";
import { validateOrReject } from "class-validator";
import { ErrorResponse } from "../models/error-response";
import { SuccessResponse } from "../models/success-response";
import server from "../server";

class EventsRouter extends CoreRouter {
    setRoutes() {
        this.router.get('/:slug', this.getEventBySlug);
        this.router.get('/', this.getEvents);
        this.router.post('/', this.createEvent);
    }

    private async getEventBySlug(req: Request, res: Response, next: NextFunction) {
        try {
            const slug = req.params.slug;
            const collection = server.database.collection(Event.collection);
            const result: Event = await collection.findOne({ slug: slug });

            const imagesPath = path.join(process.env.EVENTS_IMAGES_PATH, slug);
            if (fs.existsSync(imagesPath)) {
                const filenames = fs.readdirSync(imagesPath).map(filename => {
                    return `${slug}/${filename}`;
                });
                result.images = filenames;
            } else {
                result.images = [];
            }
            res.locals = new SuccessResponse(result);
        } catch (err) {
            res.locals = new ErrorResponse(err, 'Failed to get event by slug');
        } finally {
            next();
        }
    }

    private async getEvents(req: Request, res: Response, next: NextFunction) {
        try {
            const dateString = req.query.date;

            if (!dateString) {
                res.locals = new ErrorResponse('missing "date" query parameter', 'Failed to get events');
                return;
            }

            const date = new Date(dateString);

            // @ts-ignore
            if (isNaN(date)) {
                res.locals = new ErrorResponse('date query parameter has an invalid date', 'Failed to get events');
                return;
            }

            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            const collection = server.database.collection(Event.collection);
            const result = await collection.find({
                $expr: { $and: [
                    { $eq: [{ $month: "$date" }, month] },
                    { $eq: [{ $year: "$date" }, year] }
                ] } }
            ).toArray();
            res.locals = new SuccessResponse(result);
        } catch (err) {
            res.locals = new ErrorResponse(err, 'Failed to get events');
        } finally {
            next();
        }
    }

    private async createEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const event = new Event();
            event.title = req.body.title;
            event.date = new Date(req.body.date);
            event.description = req.body.description;
            event.place = req.body.place;
            event.slug = req.body.slug;
            event.createDate = new Date();

            await validateOrReject(event);

            const result = await server.database.collection(Event.collection).insertOne(event);
            res.locals = new SuccessResponse(result.ops[0], '', 201);
        } catch (err) {
            res.locals = new ErrorResponse(err, 'Failed to create event');
        } finally {
            next();
        }
    }
}

export let eventsRouter = new EventsRouter().router;