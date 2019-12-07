import { CoreRouter } from "../core/core.router";
import { NextFunction, Request, Response } from "express";
import { SuccessResponse } from "../models/success-response";

class AboutRouter extends CoreRouter {
    setRoutes() {
        this.router.get('/', this.about);
    }

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