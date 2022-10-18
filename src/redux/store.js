import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

// Reducers
import userReducer from "./userReducer";
import memberListReducer from "./memberListReducer";

export const store = configureStore({
    reducer: {
        activeUser: userReducer,
        memberList: memberListReducer,
    },
    middleware: [
        thunk,
        promiseMiddleware,
        promise,
        logger,
    ]
})