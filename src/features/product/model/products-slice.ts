import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {AppDispatch, AppRootStateType} from "../../../app/store.ts";
import {fetchToProducts, ProductType} from "../api/api.ts";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [] as ProductType[],
    reducers: {},
    extraReducers:builder => {
        builder.addCase(getProducts.fulfilled, (_, action)=>{
           return action.payload.products
        })
    }
})

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootStateType
    dispatch: AppDispatch
    rejectValue: null
}>()

export const getProducts = createAppAsyncThunk<{ products: ProductType[] }>(
    'products/getGoods',
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        try {
            const response = await fetchToProducts()
            return {products: response}
        } catch (e) {
            console.log(e)
            return rejectWithValue(null)
        }
    })

export const productsReducer = productsSlice.reducer
export const productsThunk = {getProducts}