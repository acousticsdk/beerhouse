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
    loaded: false,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // setProducts(state, action) {
        //     state.items = action.payload
        // },
        setLoading(state, action) {
            state.loaded = action.payload
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.loaded = false
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload
            state.loaded = true
        },
        [fetchProducts.rejected]: (state, action) => {
            console.log(action.error)
            state.items = []
        },
    },
})

export const { setProducts, setLoading } = productsSlice.actions
export default productsSlice.reducer
