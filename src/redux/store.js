import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer : {
        allCart:cartSlice
    }
})

export default store