import * as path from 'path';
import * as express from 'express';
import * as http from 'http';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Db, MongoClient } from 'mongodb';
import * as redis from 'redis';

import coreMiddlewares from './core/core.middlewares';
import { aboutRouter } from './about/about.router';
import { eventsRouter } from './events/events.router';
import { eventsIndexes } from './events/events.indexes';

class Server {
    private app: express.Application;
    private db: Db;
    private redisClient: redis.RedisClient;

    constructor() {
        this.app = express();
        this.redisClient = redis.createClient();
    }

    get database() {
        return this.db;
    }

    get redis() {
        return this.redisClient;
    }

    async bootstrap() {
        require('dotenv').config({ path: './main.env', encoding: 'utf8' });
        await this.connectDb();
        await this.createDbIndexes();

        this.setupExpress();
        this.setRoutes();
        this.setAfterRoutesMiddlewares();
        this.start();
    }

    private async createDbIndexes() {
        await eventsIndexes.createIndexes();
    }

    private async connectDb() {
        const mongoClient = await MongoClient.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = mongoClient.db(process.env.DB_NAME);
    }

    private setupExpress() {
        this.app.use(morgan('dev'));
        this.app.use(cors({ origin: '*' }));
        this.app.use(bodyParser.json({
            limit: '200kb'
        }));
    }

    private setRoutes() {
        this.app.use('/eventsimages', express.static(process.env.EVENTS_IMAGES_PATH));
        this.app.use('/docs/api', express.static(path.join(__dirname, 'docs', 'api')));

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