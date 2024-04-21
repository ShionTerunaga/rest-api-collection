import { getAllUsers } from "../../model"
import type { allUserType } from "./types"

export const useGetAllUsers = () => {
    const modelData = getAllUsers<allUserType[]>()

    return modelData
}
