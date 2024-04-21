import { useGetAllUsers } from "./src/controller"
import type { userType } from "./src/shared/types"

const setResponse = <T extends {}>(data: T): Response => {
    const res = Response.json({ data: data })

    res.headers.set("Access-Control-Allow-Origin", "*")
    res.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS",
    )

    return res
}

const server = Bun.serve({
    port: 6060,
    fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === "/") {
            const resData: userType[] = useGetAllUsers()

            const res = setResponse(resData)

            return res
        }

        return new Response("404")
    },
})

console.log(`Listening on http://localhost:${server.port} ...`)
