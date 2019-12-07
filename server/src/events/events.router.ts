import { CoreRouter } from "../core/core.router";
import { Request, Response, NextFunction } from "express";
import { Event } from "../models/event";
import { validateOrReject } from "class-validator";
import { ErrorResponse } from "../models/error-response";

class EventsRouter extends CoreRouter {
    setRoutes() {
        this.router.post('/', this.createEvent);
    }

    private async createEvent(req: Request, res: Response, next: NextFunction) {
        try {
            const event = new Event();
            event.title = req.body.title;
            event.date = +req.body.date;
            event.description = req.body.description;
            event.place = req.body.place;
            event.createDate = new Date();

            await validateOrReject(event);
        } catch (err) {
            res.locals = new ErrorResponse(err, 'Failed to create event');
        } finally {
            next();
        }
    }
}

export let eventsRouter = new EventsRouter().router;