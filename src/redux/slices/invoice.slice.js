import { createSlice } from "@reduxjs/toolkit"

const emptyInvoices = []

export const invoiceSlice = createSlice({
    name: "invoices",
    initialState: emptyInvoices,
    reducers: {
        addInvoice: (state, action) => {
            return [...state, action.payload ]
        },
        getInvoices: (state, action) => {
            return action.payload
        },
    }
})

export const { addInvoice, getInvoices } = invoiceSlice.actions
export default invoiceSlice.reducer