import { Router } from "express";

export abstract class CoreRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    abstract setRoutes();
}