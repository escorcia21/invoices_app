import { configureStore } from "@reduxjs/toolkit"
import { invoiceReducer,clientsReducer,productsReducer } from "./slices"


export const store = configureStore({
    reducer: {
        invoices: invoiceReducer,
        clients: clientsReducer,
        products: productsReducer,
    }
})