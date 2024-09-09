import { createSlice } from "@reduxjs/toolkit";

const Evalslice=createSlice({
    name:"Evaluate",
    initialState:{
        calculate:0
    },
    reducers:{
        Eval(state,action){
            state.calculate=eval(action.payload)
        },
        Reset(state){
            state.calculate=''
        }
    }
})

export default Evalslice.reducer

export const{Eval,Reset}=Evalslice.actions