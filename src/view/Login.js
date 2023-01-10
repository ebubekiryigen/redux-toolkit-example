import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import {login} from "../stores/auth"

const Login = () => {
    const {user} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    if(user) {
        return <Navigate to="/profile" />
    }
    const handleLogin = () =>{
        const userData = {
            id:1,
            name:"ebubekir",
            token:'dsgfdsg4343542523'
        }
        dispatch(login(userData))
    }
    return(
        <div className="active">
            <h3>Burası Login Sayfası</h3>
            <button onClick={handleLogin}> Giriş Yap</button>
        </div>
    )
}

export default Login