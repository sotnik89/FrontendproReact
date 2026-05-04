import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    };

    const valueTheme = {
        theme,
        toggleTheme
    };

    return(
        <ThemeContext.Provider value={valueTheme}>
            {children}
        </ThemeContext.Provider>
    )
}