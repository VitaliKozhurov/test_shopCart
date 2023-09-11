import {configureStore} from '@reduxjs/toolkit'
import {productsReducer} from "../features/product/model/products-slice.ts";
import {cartReducer} from "../features/cart/model/cart-slice.ts";
import {getFromLocalStorage} from "../common/utils/utils.ts";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
    preloadedState: getFromLocalStorage()
})

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
