import { createSlice } from "@reduxjs/toolkit"

const emptyCart = {
    clientID: '',
    date: '',
    discount: 0,
    items: [],
    subtotal: 0,
    total: 0,
}

const totalReducer = (acc, product) => acc + (product.price * product.quantity)

export const cartSlice = createSlice({
    name: "cart",
    initialState: emptyCart,
    reducers: {
        addToCart: (state, action) => {
            const { productID } = action.payload
            const already = state.items.find((product) => product.productID === productID)

            if (!already) {
                const items = [...state.items, action.payload]
                const subtotal = items.reduce(totalReducer, 0)
                const total = subtotal - (subtotal * (state.discount / 100))
                return {...state, items, subtotal, total}
            }
        },
        deleteProduct: (state, action) => {
            const items = state.items.filter((product) => product.productID !== action.payload)
            const subtotal = items.reduce(totalReducer, 0)
            const total = subtotal - (subtotal * (state.discount / 100))
            return {...state, items, subtotal, total}
        },
        updateClientID: (state, action) => {
            return {...state, clientID: action.payload}
        },
        updateDate: (state, action) => {
            return {...state, date: action.payload}
        },
        updateDiscount: (state, action) => {
            const total = state.subtotal - (state.subtotal * (state.discount / 100))
            return {...state, discount: action.payload, total}
        },
        resetCart: (state, action) => {
            return emptyCart
        },
    }
})

export const { addToCart, deleteProduct, resetCart, updateClientID, updateDate, updateDiscount } = cartSlice.actions
export default cartSlice.reducer