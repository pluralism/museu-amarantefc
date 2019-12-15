import * as path from 'path';
import { Router, Request, Response, NextFunction } from "express";

class CoreMiddlewares {
    router: Router;

    constructor() {
        this.router = Router();
        this.setMiddlewares();
    }

    private setMiddlewares() {
        this.router.use(this.formatResponse);
        this.router.use(this.routeNotFound);
    }

    private routeNotFound(req: Request, res: Response, next: NextFunction) {
        return res.sendFile(path.join(__dirname, '../client/index.html'));
    }

    private formatResponse(req: Request, res: Response, next: NextFunction) {
        if (!Object.keys(res.locals).length) {
            return next();
        }

        const status = res.locals.status || 200;
        delete res.locals.status;
        res.status(status).json(res.locals);
    }
}

export default new CoreMiddlewares();