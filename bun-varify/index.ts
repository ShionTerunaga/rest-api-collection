import { useGetAllUsers } from "./src/controller"

const server = Bun.serve({
    port: 6060,
    fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === "/") return useGetAllUsers()

        return new Response("404")
    },
})

console.log(`Listening on http://localhost:${server.port} ...`)
