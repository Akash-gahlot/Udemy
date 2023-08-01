import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userEmail = selector({
    key: "userEmail",
    get: ({ get }) => {
        const state = get(userState);
        return state.email;
    },
});
