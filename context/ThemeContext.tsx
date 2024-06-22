"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark";

const ThemeContext = createContext<ThemeType>("light");

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.remove("light");
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
