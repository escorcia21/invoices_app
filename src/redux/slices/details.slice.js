import { createSlice } from "@reduxjs/toolkit"

const emptyDetails = {
    isOpen: false,
    details: [],
}

export const detailsSlice = createSlice({
    name: "details",
    initialState: emptyDetails,
    reducers: {
        getDetails: (state, action) => {
            return { isOpen: true, details: action.payload }
        },
        dismissDetails: (state, action) => {
            return emptyDetails
        }
    }
})

export const { getDetails, dismissDetails } = detailsSlice.actions
export default detailsSlice.reducer