import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addProduct(state, action) {
        //     state.products.push(action.payload)
        //     state.totalPrice = state.products.reduce((sum, obj) => {
        //         return obj.price + sum
        //     }, 0)
        // },
        addProduct(state, action) {
            const findItem = state.products.find(
                (obj) => obj.id === action.payload.id
            )

            if (findItem) {
                findItem.count++
            } else {
                state.products.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        // plusProduct(state, action) {
        //     const findItem = state.products.find(
        //         (obj) => obj.id === action.payload
        //     )
        // },
        minusProduct(state, action) {
            const findItem = state.products.find(
                (obj) => obj.id === action.payload
            )
            if (findItem && findItem.count > 1) {
                findItem.count--
            }
            state.totalPrice = state.products.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        removeProduct(state, action) {
            const { title } = state.products.find(
                (obj) => obj.id === action.payload
            )
            if (
                window.confirm(
                    `Вы действительно хотите удалить ${title} из корзины?`
                )
            ) {
                state.products = state.products.filter(
                    (obj) => obj.id !== action.payload
                )
                state.totalPrice = state.products.reduce((sum, obj) => {
                    return obj.price * obj.count + sum
                }, 0)
            }
        },
        clearShoppingCart(state) {
            if (window.confirm(`Вы действительно очистить корзину?`))
                state.products = []
            state.totalPrice = 0
        },
    },
})

export const cartSelector = (state) => state.cart

export const {
    addProduct,
    removeProduct,
    clearShoppingCart,
    plusProduct,
    minusProduct,
} = cartSlice.actions
export default cartSlice.reducer
