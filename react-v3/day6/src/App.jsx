import React from "react";
import Home from "./Pages/Home";
// import Content from "./Context/Content";
// import Context from "./Context/Context";
// import Counter from "./Reducer/Counter";
import StateProvider from "./StateProvider/StateProvider";
function App() {
  //let arr = [1, 2, 3, 4, 5];
  // let sum = arr.reduce((x, y) => x + y);
  // console.log(sum);
  return (
    // <Context>
    //   <Content />
    // </Context>
    <StateProvider>
      <Home />
    </StateProvider>
  );
}

export default App;
