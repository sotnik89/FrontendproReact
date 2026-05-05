import { useContext } from "react";
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext.jsx';

import './Header.css'

export default function Header(){
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <div className={`header-${theme}`}>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about us">About us</Link>
            <button className="btn" onClick={toggleTheme}>{theme}</button>
        </div>
    )
}
