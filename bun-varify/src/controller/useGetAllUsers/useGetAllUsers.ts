import { getAllUsers } from "../../model"
import { setResponse } from "../common/setResponse"
import type { allUserType } from "./types"

export const useGetAllUsers = () => {
    const modelData = getAllUsers<allUserType[]>()

    const res = setResponse(modelData)

    return res
}
