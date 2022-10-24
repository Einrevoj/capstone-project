import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

// Reducers
import userReducer from "./userReducer";
import memberListReducer from "./memberListReducer";
import incomeReducer from "./incomeReducer";
import expenseReducer from "./expenseReducer";
import investmentReducer from "./investmentReducer";
import profileReducer from "./profileReducer";

export const store = configureStore({
    reducer: {
        activeUser: userReducer,
        memberList: memberListReducer,
        reportIncome: incomeReducer,
        reportExpense: expenseReducer,
        investment: investmentReducer,
        profile: profileReducer,



    },
    middleware: [
        thunk,
        promiseMiddleware,
        promise,
        logger,
    ]
})