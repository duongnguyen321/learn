import React, { useContext } from "react";
import { StateContext } from "../../StateProvider/Context/StateProvider";
import { deleteTodo } from "../../StateProvider/Actions/todoActions";

export default function Todolists(props) {
  const { state, dispatch } = useContext(StateContext);
  const { todos } = state;
  const { setOpen, isOpen } = props;
  return (
    <div className="lists">
      <div className="todolist">
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

      <i
        onClick={() => {
          setOpen(isOpen ? false : true);
        }}
        className="home"
      >
        _____
      </i>
    </div>
  );
}
