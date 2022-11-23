import React, { useContext, useState } from "react";
import { addTodo, deleteTodo } from "../StateProvider/Actions/todoActions";
import { StateContext } from "../StateProvider/StateProvider";
export default function Home() {
  const { state, dispatch } = useContext(StateContext);
  const [value, setValue] = useState("");
  const { todos } = state;
  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value) {
            dispatch(addTodo(value));
          }
          setValue("");
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          autoFocus
        />
      </form>

      {todos.map((item, index) => {
        return (
          <div key={index} className="row">
            <p>{item}</p>
            <button
              onClick={() => {
                dispatch(deleteTodo(index));
              }}
            >
              Xóa
            </button>
          </div>
        );
      })}
    </div>
  );
}
