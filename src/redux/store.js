import { configureStore } from "@reduxjs/toolkit"
import { invoiceReducer } from "./slices"


export const store = configureStore({
    reducer: {
        invoices: invoiceReducer,
    }
})