import { cleanEnv, num } from "envalid";

export const env = cleanEnv(Deno.env.toObject(), {
  PORT: num({ default: 3000 }),
});
