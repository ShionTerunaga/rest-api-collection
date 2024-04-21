export const setResponse = <T extends {}>(data: T): Response => {
    const res = Response.json({ data: data })

    res.headers.set("Access-Control-Allow-Origin", "*")
    res.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS",
    )

    return res
}
