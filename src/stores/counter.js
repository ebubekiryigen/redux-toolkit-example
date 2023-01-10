import { createSlice } from "@reduxjs/toolkit";


export const counter = createSlice({
    name:'counter',
    initialState:{
        value:2,
    },
    reducers:{
        increment : state => { state.value+=1},
        decrement : state => { state.value-=1},
        multiplication: state => {state.value = state.value * state.value},
        incrementByAmount: (state,action) => {state.value += action.payload}
    }
})

export const {increment, decrement, incrementByAmount, multiplication} = counter.actions

export default counter.reducer