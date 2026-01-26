import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice"

export const store = configureStore({
    // object
    reducer : {
        // key[name in slice]: slice name
        cart : CartSlice
    }
})