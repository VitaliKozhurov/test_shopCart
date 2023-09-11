import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../../product/api/api.ts";

export type CartItemsType = {
    [key: string]: { product: ProductType, count: number }
}
type OrderFormType = {
    name: string
    surName: string
    address: string
    phone: string
}

type CartStateType = {
    order: CartItemsType,
    user: OrderFormType
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {order: {}, user: {}} as CartStateType,
    reducers: {
        addProduct: (state, action: AddProductToCartType) => {
            if (state.order[action.payload.product.id]) {
                state.order[action.payload.product.id].count += action.payload.count
            } else {
                state.order[action.payload.product.id] = {product: action.payload.product, count: action.payload.count}
            }
        },
        removeProduct: (state, action: RemoveProductFromCartType) => {
            if (state.order[action.payload.id].count === 1) {
                delete state.order[action.payload.id]
            } else {
                state.order[action.payload.id].count--
            }
        },
        addUserInfo: (state, action: PayloadAction<OrderFormType>) => {
            state.user = action.payload
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
type AddProductToCartType = PayloadAction<{ product: ProductType, count: number }>;
type RemoveProductFromCartType = PayloadAction<{ id: string }>;