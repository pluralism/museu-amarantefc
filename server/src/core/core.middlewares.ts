import { Router, Request, Response, NextFunction } from "express";

class CoreMiddlewares {
    router: Router;

    constructor() {
        this.router = Router();
        this.setMiddlewares();
    }

    private setMiddlewares() {
        this.router.use(this.formatResponse);
    }

    private formatResponse(req: Request, res: Response, next: NextFunction) {
        const status = res.locals.status || 200;
        delete res.locals.status;
        res.status(status).json(res.locals);
    }
}

export default new CoreMiddlewares();