import { getAllUsers } from "../../model"
import type { allUserType } from "./types"
import type { Response } from "express"

export const useGetAllUsers = async (res: Response) => {
    console.log("one")

    const modelData = await getAllUsers<allUserType[]>("user1")

    if (!modelData) {
        return res.json({ data: "エラーだよん" })
    }

    return res.json({ data: modelData })
}
