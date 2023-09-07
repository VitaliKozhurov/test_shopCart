import {createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../../product/api/api.ts";

type CartItemsType = {
    [key:string]: ProductType[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState:{} as CartItemsType,
    reducers:{}
})

