import React, { useContext } from "react";
import { ThemeContext } from "../Contex/GlobalState";
export default function Content() {
  const context = useContext(ThemeContext);
  return (
    <>
      <h1 className={`theme-${context.theme}`}>Content</h1>
      <button type="button" onClick={context.ToggleTheme}>
        Toggle Theme
      </button>
    </>
  );
}
