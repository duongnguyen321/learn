import { increment, decrement, incrementByAmount, initialState } from "./slice";

function App() {
  return (
    
      <div className="App">
        <p>{initialState}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementByAmount}>0</button>
      </div>
    
  );
}

export default App;
