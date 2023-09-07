import {configureStore} from '@reduxjs/toolkit'
import {goodsReducer} from "../../features/goods/model/goods-slice.ts";

export const store = configureStore({
    reducer: {
        goods: goodsReducer
    },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
