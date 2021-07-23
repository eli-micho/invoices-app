import invoiceTypes from "./invoiceTypes";

const INITIAL_STATE = {
    invoices: []
};

function nextInvoiceID(invoices) {
    const maxId = invoices.reduce((maxId, invoices) => Math.max(invoices.id, maxId), -1)
    return maxId + 1
  }

const invoiceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case invoiceTypes.NEW_INVOICE_START: 
            return {
                ...state,
                invoices: [
                    ...state.invoices,
                    {
                        id: nextInvoiceID(state.invoices),
                        date: action.payload.date,
                        recipient: action.payload.recipient,
                        amount: action.payload.amount,
                        status: false
                    }
                ]
            }
        case invoiceTypes.TOGGLE_STATUS:
            return {
                ...state,
                invoices: state.invoices.map(inv => {
                    if(inv.id !== action.payload){
                        return inv
                    }
                return {
                    ...inv,
                    status: !inv.status
                }
                })
            }
        default:
            return state
    }
};

export default invoiceReducer;