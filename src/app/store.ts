import {configureStore} from '@reduxjs/toolkit'
import {productsReducer} from "../features/product/model/products-slice.ts";

export const store = configureStore({
    reducer: {
        products: productsReducer
    },
})

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
