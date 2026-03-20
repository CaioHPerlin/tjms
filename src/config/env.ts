import z from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']),
});

export type Environment = z.infer<typeof envSchema>

function loadEnv(): Environment {
    const result = envSchema.safeParse(process.env);

    if (result.error) {
        throw new Error(result.error.stack)
    }

    return result.data;
}

export const env = loadEnv();