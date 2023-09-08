import {AppRootStateType} from "../../../app/store.ts";

export const getTotalPrice = (state: AppRootStateType) => {
    if (!Object.values(state.cart).length) {
        return 0
    } else {
        let total = 0;
        for (const key of Object.keys(state.cart)) {
            total += state.cart[key].reduce((acc, currentValue) => {
                return acc + currentValue.price
            }, 0)
        }
        return total
    }
}