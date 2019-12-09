import { CoreRouter } from "../core/core.router";
import { NextFunction, Request, Response } from "express";
import { SuccessResponse } from "../models/success-response";

class AboutRouter extends CoreRouter {
    setRoutes() {
        this.router.get('/', this.about);
    }

    /**
     * @api {GET} /api/v1/about Get API information
     * @apiVersion 1.0.0
     * @apiName about
     * @apiGroup About
     * 
     * @apiSuccess {Object} data Response information
     * @apiSuccess {String} data.name Name of the API
     * @apiSuccess {String} data.version Version of the API
     * @apiSuccess {String} message Optional message
     * 
     * @apiSuccessExample {json} Success-Response:
     * HTTP/1.1 200 OK
     * {
     *  "data": {
     *      "name": "API Name",
     *      "version": "1.0.0"
     *  },
     *  "message": "Optional message"
     * }
     */
    private about(req: Request, res: Response, next: NextFunction) {
        const pkg = require('../../package.json');
        res.locals = new SuccessResponse({
            name: pkg.name,
            version: pkg.version
        });
        next();
    }
}

export let aboutRouter = new AboutRouter().router;