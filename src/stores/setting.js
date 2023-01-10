import { createSlice } from "@reduxjs/toolkit";


export const setting = createSlice({
    name:'setting',
    initialState:{
        dark:false,
        language:'tr'
    },
    reducers:{
       setDarkMode:state =>{
        state.dark = !state.dark
       },
       setLanguage: (state,action) => {
        state.language = action.payload
       }
    }
})

export const {setDarkMode, setLanguage} = setting.actions

export default setting.reducer