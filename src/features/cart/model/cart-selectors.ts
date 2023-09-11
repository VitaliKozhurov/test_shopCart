import {AppRootStateType} from "../../../app/store.ts";

export const getTotalPrice = (state: AppRootStateType) => {
    if (!Object.values(state.cart.order).length) {
        return 0
    } else {
        let total = 0;
        for (const key of Object.keys(state.cart.order)) {
            total += state.cart.order[key].product.price * state.cart.order[key].count
        }
        return total
    }
}

export const getProductsInCart = (state:AppRootStateType)=>{
    return state.cart.order
}
export const getUserState = (state:AppRootStateType)=>state.cart.user