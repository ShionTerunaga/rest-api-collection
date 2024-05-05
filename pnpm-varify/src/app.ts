import express, { type Request, type Response } from "express"
import { useGetAllUsers } from "./controller"

const start = performance.now()
const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    useGetAllUsers(res)
})

app.listen(5050, () => {
    console.log("hogehoge")

    const end = performance.now()

    console.log(end - start)
})
