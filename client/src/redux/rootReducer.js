import { combineReducers } from "redux";

import userReducer from './users/userReducer';
import invoiceReducer from "./invoices/invoiceReducer";
import filterReducer from "./filters/filtersReducer";

const rootReducer = combineReducers({ 
    users: userReducer,
    invoices: invoiceReducer,
    filters: filterReducer
});

export default rootReducer;

