import React, { useContext, useState } from "react";
import { addTodo } from "../../StateProvider/Actions/todoActions";
import { StateContext } from "../../StateProvider/Context/StateProvider";

export default function Form(props) {
  const { dispatch } = useContext(StateContext);
  const { setOpen, isOpen } = props;

  const [value, setValue] = useState("");

  return (
    <>
      <i
        className="dynamic_island"
        onClick={() => {
          setOpen(isOpen ? false : true);
        }}
      >
        ➖
      </i>
      <h1 className="title">Todo Lists</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value) {
            dispatch(addTodo(value));
          }
          setValue("");
        }}
        className="form"
      >
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          placeholder="Todo list..."
        />
      </form>
    </>
  );
}
