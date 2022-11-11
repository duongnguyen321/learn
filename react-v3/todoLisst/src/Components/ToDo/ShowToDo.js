import React, { Component } from "react";
import getContext from "../../Context/getContext";
import { getTodos, removeToDo, completeToDo } from "./toDoSlice";

export class ShowToDo extends Component {
  componentDidMount = () => {
    getTodos(this.props.store);
  };

  render() {
    const { doLists, isLoading } = this.props.store.data;
    return (
      <div className="todo-lists">
        {isLoading ? (
          <div className="alert alert-info">Đang tải...</div>
        ) : doLists.length ? (
          doLists.map(({ id, name, isCompleted }) => {
            const checked = {
              defaultChecked: isCompleted,
            };
            return (
              <div
                className={`todo-item ${isCompleted ? "completed" : ""}`}
                key={id}
              >
                <input
                  type="checkbox"
                  className="me-2"
                  onChange={(e) => {
                    completeToDo(id, e.target.checked, this.props.store);
                  }}
                  {...checked}
                />
                <span>{name}</span>
                <span
                  className="remove"
                  onClick={() => {
                    removeToDo(id, this.props.store);
                  }}
                >
                  &times;
                </span>
              </div>
            );
          })
        ) : (
          <div className="alert alert-danger text-center mt-3">
            Không tìm thấy kết quả
          </div>
        )}
      </div>
    );
  }
}

export default getContext(ShowToDo);
