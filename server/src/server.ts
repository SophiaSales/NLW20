import { fastify} from "fastify";
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from "fastify-type-provider-zod";
import {fastifyCors} from "@fastify/cors";
import { env } from "./env";
import { getRoomsRoute } from "./http/routes/get-rooms";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: "http://localhost:5173"
});

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'OK'
})

app.register(getRoomsRoute)

app.listen({port: env.PORT})
