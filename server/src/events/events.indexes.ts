import { CoreIndexes } from "../core/core.indexes";
import { Event } from "../models/event";
import server from "../server";

class EventsIndexes implements CoreIndexes {
    async createIndexes() {
        const collection = server.database.collection(Event.collection);
        await collection.createIndex({ date: 1 });
        await collection.createIndex({ title: 1 }, { unique: true });
        await collection.createIndex({ slug: 1 }, { unique: true });
    }
}

export let eventsIndexes = new EventsIndexes();