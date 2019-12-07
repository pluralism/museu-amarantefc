import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import coreMiddlewares from './core/core.middlewares';
import { aboutRouter } from './about/about.router';
import { eventsRouter } from './events/events.router';

class Server {
    private app: express.Application;

    constructor() {
        this.app = express();
    }

    bootstrap() {
        require('dotenv').config({ path: './main.env', encoding: 'utf8' });
        this.setupExpress();
        this.setRoutes();
        this.setAfterRoutesMiddlewares();
        this.start();
    }

    private setupExpress() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json({
            limit: '200kb'
        }));
    }

    private setRoutes() {
        this.app.use('/api/v1/about', aboutRouter);
        this.app.use('/api/v1/events', eventsRouter);
    }

    private setAfterRoutesMiddlewares() {
        this.app.use(coreMiddlewares.router);
    }

    private start() {
        const server = http.createServer(this.app);
        server.listen(+process.env.PORT, '0.0.0.0', () => {
            console.log(`NodeJS app is listening at port ${process.env.PORT}`);
        });
    }
}

export default new Server();