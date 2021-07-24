/* import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store; */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import invoiceReducer from './features/invoices/invoiceSlice';

export default configureStore({
    reducer: {
        users: userReducer,
        invoices: invoiceReducer
    },
})