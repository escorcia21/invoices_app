import { createSlice } from "@reduxjs/toolkit"

const emptyClients = []

export const clientSlice = createSlice({
    name: "clients",
    initialState: emptyClients,
    reducers: {
        addClient: (state, action) => {
            return { ...state, ...action.payload }
        },
        getClients: (state, action) => {
            return action.payload
        },
    }
})

export const { addClient, getClients } = clientSlice.actions
export default clientSlice.reducer