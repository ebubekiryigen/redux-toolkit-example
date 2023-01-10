import Home from './view/Home'
import About from './view/About'
import Profile from './view/Profile'
import Login from './view/Login'
export const routes = [
    {
        path:'/',
        exact:true,
        element:Home,
        auth:false
    },
    {
        path:'/about',
        exact:true,
        element:About,
        auth:false
    },
    {
        path:'/profile',
        exact:true,
        element:Profile,
        auth:true
    },
    {
        path:'/login',
        exact:true,
        element:Login,
        auth:false
    },
    
]