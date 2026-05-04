import { useContext } from "react";
import ThemeProvider, { ThemeContext } from '../../context/ThemeContext.jsx';

export default function MyApp() {

    const theme = useContext(ThemeContext)
    console.log(theme)
    return(
        <div>
            <p>Поточна тема: {ThemeProvider.theme}</p>
            <button onClick={ThemeProvider.toggleTheme}>Змінити тему</button>
        </div>
    )
}