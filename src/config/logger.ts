import { Environment } from "@/config/env";
import { PinoLoggerOptions } from "fastify/types/logger";

export function getLoggerOptions({ NODE_ENV }: Environment): PinoLoggerOptions {
    if (NODE_ENV === 'development') {
        return {
            level: 'info',
            transport: {
                target: 'pino-pretty',
                options: {
                    translateTime: 'HH:MM:ss Z',
                    ignore: 'pid,hostname'
                }
            }
        }
    }

    return { level: 'silent' }
}