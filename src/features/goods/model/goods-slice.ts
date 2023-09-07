import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchToGoods} from "../../api/api.ts";
import {AppDispatch, AppRootStateType} from "../../../app/model/store.ts";

type GoodType = {
    id: string
    price: number
    description: string
    photo: string
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: [] as GoodType[],
    reducers: {},
})

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: AppRootStateType
    dispatch: AppDispatch
    rejectValue: null
}>()

export const getGoods = createAppAsyncThunk<{ goods: GoodType[] }>(
    'goods/getGoods',
    async (_, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        try {
            const response = await fetchToGoods()
            return {goods: response}
        } catch (e) {
            console.log(e)
            return rejectWithValue(null)
        }
    })

export const goodsReducer = goodsSlice.reducer