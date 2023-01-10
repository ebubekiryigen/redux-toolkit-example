import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import {logout} from "../stores/auth"

const Profile = () => {
    const {user} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    if(!user) {
        return <Navigate to="/login" />
    }
    const logoutHandler = () =>{
        dispatch(logout(false))
    }
    return(
        <div className="active">
            Profil Sayfası
            <button onClick={logoutHandler}>Çıkış yap</button>
        </div>
    )
}

export default Profile