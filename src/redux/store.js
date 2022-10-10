import { configureStore } from "@reduxjs/toolkit"
import { invoiceReducer,clientsReducer,productsReducer, cartReducer } from "./slices"


export const store = configureStore({
    reducer: {
        invoices: invoiceReducer,
        clients: clientsReducer,
        products: productsReducer,
        cart: cartReducer,
    }
})