import { db } from "../../db/db"

export const getData = <T>(table: string) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(`SELECT * FROM ${table}`, (err: Error | null, rows: T[]) => {
                console.log(rows)

                if (!err) {
                    resolve(rows)
                }
            })
        })
    })
}
