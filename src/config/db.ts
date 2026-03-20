import { Environment } from "@/config/env";
import { drizzle } from "drizzle-orm/node-postgres";

export function loadDatabase(env: Environment) {
    return drizzle(env.DATABASE_URL);
}