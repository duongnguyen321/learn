import React, { useContext } from "react";
import { ThemeContext } from "../Contex/GlobalState";

export default function Title() {
  const context = useContext(ThemeContext);

  return <h1 className={`theme-${context.theme}`}>Title</h1>;
}
