import React, { useState } from "react";
import Content from "../components/Content";
import Title from "../components/Title";
export const ThemeContext = React.createContext();
export default function GlobalState() {
  const [theme, setTheme] = useState("light");
  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme: theme,ToggleTheme:ToggleTheme }}>
      <Title/>
      <Content />
    </ThemeContext.Provider>
  );
}
