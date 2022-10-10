import { createSlice } from "@reduxjs/toolkit"

const emptyCart = []

export const cartSlice = createSlice({
    name: "cart",
    initialState: emptyCart,
    reducers: {
        addToCart: (state, action) => {
            const { productID } = action.payload
            const already = state.find((product) => product.productID === productID)
            if (!already) {
                return [...state, action.payload ]
            }
        },
        deleteProduct: (state, action) => {
            return state.filter((product) => product.productID !== action.payload)
        },
        resetCart: (state, action) => {
            return emptyCart
        },
    }
})

export const { addToCart, deleteProduct, resetCart } = cartSlice.actions
export default cartSlice.reducer