import { cleanEnv, num, str } from "envalid";

export const env = cleanEnv(Deno.env.toObject(), {
  PORT: num({ default: 3000 }),
  HELLO: str({ default: "Hello world!" }),
});
