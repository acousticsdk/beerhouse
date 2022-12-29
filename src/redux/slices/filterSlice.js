import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: '-rating',
    },
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = Number(action.payload)
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
            // console.log(action.payload)
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        // setFilter(state, action) {
        //     state.categoryId = action.payload.categoryId
        //
        //
        //
        //
        // },
    },
})

export const sortSelector = (state) => state.filter.sort
export const selectProductById = (id) => (state) =>
    state.cart.products.find((obj) => obj.id === id)

export const { setCategoryId, setSort, setFilter, setSearchValue } =
    filterSlice.actions
export default filterSlice.reducer
