import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async (params) => {
        try {
            const { order, sortBy, category, search } = params
            const { data } = await axios.get(
                `https://63456567dcae733e8ff13e95.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
            )
            return data
        } catch (error) {
            return error
        }
    }
)

const initialState = {
    items: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // setProducts(state, action) {
        //     state.items = action.payload
        // },
    },
    extraReducers: {
        [fetchProducts1.pending]: (state, action) => {
            console.log('pending')
        },
        [fetchProducts1.fulfilled]: (state, action) => {
            console.log('OK', action)
            state.items = action.payload
        },
        [fetchProducts1.rejected]: (state, action) => {
            console.log(action.error)
        },
    },
})

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer
