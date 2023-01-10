import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counter";
import  settingReducer  from "./setting";
import  authReducer  from "./auth";




export default configureStore({
    reducer:{
        abc: counterReducer,
        setting: settingReducer,
        auth:authReducer
    },
})