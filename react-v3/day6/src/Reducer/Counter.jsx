import React, { useReducer } from "react";

export default function Counter() {
  const initialState = {
    count: 0,
    msg: "Dương",
  };
  const countReducer = (state, action) => {
    switch (action.type) {
      case "tang":
        return { ...state, count: state.count + action.payload };
      case "giam":
        return { ...state, count: state.count - action.payload };
      case "0":
        return { ...state, count: initialState.count };
      default:
        throw new Error("Khum tồn tại action" + action.type);
    }
  };
  const [state, dispatch] = useReducer(countReducer, initialState);
  const { count } = state;
  return (
    <div>
      <h1>Count:{count.toLocaleString()}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "giam",
            payload: 2,
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "0",
          });
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "tang",
            payload: 2,
          });
        }}
      >
        +
      </button>
    </div>
  );
}
