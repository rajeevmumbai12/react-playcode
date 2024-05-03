import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light', // Default theme
    toggleTheme: () => { }, // Placeholder function
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };