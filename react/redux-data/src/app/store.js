import { configureStore } from "@reduxjs/toolkit";
import  countSlice from "../features/Counter/countSlice";

export default configureStore({
    reducer:{
        count : countSlice
    }
})