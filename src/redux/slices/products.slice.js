import { createSlice } from "@reduxjs/toolkit"

const emptyProducts = []

export const productSlice = createSlice({
    name: "products",
    initialState: emptyProducts,
    reducers: {
        addProduct: (state, action) => {
            return { ...state, ...action.payload }
        },
        getProducts: (state, action) => {
            return action.payload
        },
    }
})

export const { addProduct, getProducts } = productSlice.actions
export default productSlice.reducer