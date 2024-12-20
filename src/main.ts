import { Hono } from "hono";
import { env } from "~/config.ts";

const app = new Hono();

app.get("/", (c) => c.text(env.HELLO));

Deno.serve({ port: env.PORT }, app.fetch);

// export default app;
