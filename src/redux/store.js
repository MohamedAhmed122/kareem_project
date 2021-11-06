import { createStore, applyMiddleware } from "redux";

import RootReducer from "./rootReducer";

import logger from "redux-logger";


// here you can add many things in this array
const middleWare = [logger];


export const store = createStore(RootReducer, applyMiddleware(...middleWare));

