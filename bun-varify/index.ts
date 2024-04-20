const server = Bun.serve({
  port: 6060,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Bun!");
    else if (url.pathname === "/getTask") return new Response("hogehoge");
    else if (url.pathname === "/post") return new Response("hogehoge");

    return new Response("404");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
