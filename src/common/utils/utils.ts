import {AppRootStateType} from "../../app/store.ts";

export const setToLocalStorage = (store: AppRootStateType) => {
    localStorage.setItem("store", JSON.stringify(store));
};

export const getFromLocalStorage = () => {
    const values = localStorage.getItem("store");
    if (values) {
        return JSON.parse(values);
    }
};