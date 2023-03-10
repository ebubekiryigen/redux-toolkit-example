import { createSlice } from "@reduxjs/toolkit";


export const auth = createSlice({
    name:'auth',
    initialState:{
        user:localStorage.getItem('user') ?? false
    },
    reducers:{
       login: (state,action) => {
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(action.payload))
       },
       logout: state => {
        state.user = false
        localStorage.removeItem('user')
       }
    }
})

export const {login, logout} = auth.actions

export default auth.reducer