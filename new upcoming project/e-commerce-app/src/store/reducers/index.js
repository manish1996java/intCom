import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    cartReducer,
    productReducer,
});

export default rootReducer;