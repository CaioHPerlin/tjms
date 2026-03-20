import { env } from "@/config/env";
import { getLoggerOptions } from "@/config/logger";
import fastify from "fastify";

const PORT = 5000;

async function main() {
    const app = fastify({
        logger: getLoggerOptions(env)
    })

    await app.listen({
        port: PORT
    });

    console.log(`
        🚀 Fastify is Running                          
        📍 http://localhost:${PORT}                       
        🌐 Environment: ${env.NODE_ENV}
        `);
}

main();