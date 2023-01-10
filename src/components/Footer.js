import { useDispatch, useSelector } from "react-redux"
import { setLanguage, setDarkMode } from "../stores/setting"


const Footer = () => {

    const {dark, language} = useSelector(state=>state.setting)
    const languages = ['tr', 'en']
    const dispatch = useDispatch()

    const handleLanguage = lang => {
        dispatch(setLanguage(lang))
    }

    return(
        <div>
            Footer
            <div>
                {languages.map((lang,index)=>(
                    <button onClick={()=> handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
                ))}<br />
                <button onClick={()=> dispatch(setDarkMode())}>{dark ? 'Light Moda Geç' : 'Dark Moda Geç'}</button>
            </div>
        </div>
    )
}

export default Footer