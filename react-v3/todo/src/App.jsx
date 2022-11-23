import React from "react";
import Main from "./Layout/Main";
import StateProvider from "./StateProvider/Context/StateProvider";
import "./Assets/Styles/index.scss"
function App() {
  return (
    <StateProvider>
      <Main />
    </StateProvider>
  );
}

export default App;
