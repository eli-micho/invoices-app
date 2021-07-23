import invoiceTypes from "./invoiceTypes"

export const newInvoiceStart = () => ({
    type: invoiceTypes.NEW_INVOICE_START,
});

export const toggleInvoiceStatus = () => ({
    type: invoiceTypes.TOGGLE_STATUS,
});