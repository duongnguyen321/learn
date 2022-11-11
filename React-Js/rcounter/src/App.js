import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, deletecount } from "./redux/counterSlice";
import { Button } from "react-bootstrap";

export default function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{value}</h1>
      <div className="button">
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(deletecount())}>x</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </div>
    </div>
  );
}
