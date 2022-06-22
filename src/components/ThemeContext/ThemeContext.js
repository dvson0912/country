import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };
  const valueTheme = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={valueTheme}>{children}</ThemeContext.Provider>
  );
};
