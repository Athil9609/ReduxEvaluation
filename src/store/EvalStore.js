import { configureStore } from "@reduxjs/toolkit";
import EvalSlice from "./EvalSlice";

const store=configureStore({
    reducer:{
        EvalReducer:EvalSlice
    }
})

export default store