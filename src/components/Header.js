import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"


const Header = () => {

    const {dark, language} = useSelector(state=>state.setting)

    return(
        <div>
            Header
            <nav>
                <NavLink to="/">
                        Anasayfa
                </NavLink>
                <NavLink to="/about">
                        Hakkımızda
                </NavLink>
                <NavLink to="/profile">
                        Profil
                </NavLink>
            </nav>
            <div>
                Dark Mod = {dark ? 'evet' : 'hayır'} <br />
                Mevcut Dil = {language}
            </div>
        </div>
    )
}

export default Header