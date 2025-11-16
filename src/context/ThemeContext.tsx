import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

const defaultContext: ThemeContextType = {
    theme: "light",
    toggleTheme: () => { },
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);