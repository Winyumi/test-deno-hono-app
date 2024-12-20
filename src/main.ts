import { Hono } from "hono";
import { env } from "~/config.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello world!"));

Deno.serve({ port: env.PORT }, app.fetch);

// export default app;
