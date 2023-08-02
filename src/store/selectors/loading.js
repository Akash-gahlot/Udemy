import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userloading = selector({
    key: "userloading",
    get: ({ get }) => { 
        const state = get(userState)
        return state.isLoading;
    }
})