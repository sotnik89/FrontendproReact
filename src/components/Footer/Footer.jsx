
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext.jsx';

import './Footer.css'

export default function Footer(){
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <div className={`footer footer-${theme}`}>
            <button className="btn" onClick={toggleTheme}>{theme}</button>
        </div>
    )
}