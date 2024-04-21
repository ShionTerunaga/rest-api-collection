import { Database } from "bun:sqlite"
import { paths } from "../shared/data"

export const getAllUsers = <T>() => {
    const db = new Database(paths.database)

    const data = db.query("SELECT * FROM user1").all()

    return data as T
}
