import { db } from "../db/db"
import { getData } from "./common/getData"

export const getAllUsers = async <T>(table: string) => {
    const resData = (await getData<T>(table)) as T[]

    return resData
}
