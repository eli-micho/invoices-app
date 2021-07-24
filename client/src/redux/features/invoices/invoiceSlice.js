import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState: {
        invoices: []
    },
    reducers: {
        add: (state, action) => {
            state.invoices.push(action.payload)
        },
    },
});

export const { add } = invoiceSlice.actions;

export default invoiceSlice.reducer;