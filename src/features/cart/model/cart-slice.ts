import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../../product/api/api.ts";

type CartItemsType = {
    [key: string]: { product: ProductType, count: number }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {} as CartItemsType,
    reducers: {
        addProduct: (state, action: AddProductToCartType) => {
            if (state[action.payload.product.id]) {
                state[action.payload.product.id].count += action.payload.count
            } else {
                state[action.payload.product.id] = {product: action.payload.product, count: action.payload.count}
            }
        },
        removeProduct: (state, action: RemoveProductFromCartType) => {
            if (state[action.payload.id].count === 1) {
                delete state[action.payload.id]
            } else {
                state[action.payload.id].count--
            }

        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
type AddProductToCartType = PayloadAction<{ product: ProductType, count:number }>;
type RemoveProductFromCartType = PayloadAction<{ id: string }>;