import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { schema } from "../../db/schema";
import { db } from "../../db/connection";
import { name } from "drizzle-orm";

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async () => {
        const result = await db.select({
            id: schema.rooms.id,
            name: schema.rooms.name,
        }).from(schema.rooms).orderBy(schema.rooms.createdAt);

        return result

    })



}