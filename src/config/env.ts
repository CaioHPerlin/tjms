import z from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']),
    DATABASE_URL: z.string().includes('postgresql')
});

export type Environment = z.infer<typeof envSchema>
export const env = envSchema.parse(process.env);