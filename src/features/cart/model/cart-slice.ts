import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../../product/api/api.ts";

type CartItemsType = {
    [key: string]: ProductType[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {} as CartItemsType,
    reducers: {
        addProduct: (state, action: AddProductToCartType) => {
            if (state[action.payload.product.id]) {
                state[action.payload.product.id].push(action.payload.product)
            } else {
                state[action.payload.product.id] = [action.payload.product]
            }
        },
        removeProduct: (state, action: RemoveProductFromCartType) => {
            state[action.payload.id].pop();
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
type AddProductToCartType = PayloadAction<{ product: ProductType }>;
type RemoveProductFromCartType = PayloadAction<{ id: string }>;