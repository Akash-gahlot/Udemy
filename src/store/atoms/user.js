import { atom } from "recoil";

export const userState = new atom({
    key: "userState",
    default: {
        isLoading: true,
        email:null,
    }
})

