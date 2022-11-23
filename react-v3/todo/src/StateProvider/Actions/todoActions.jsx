export const addTodo = (todos) => {
  return {
    type: "todos/add",
    payload: todos,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "todos/delete",
    payload: id,
  };
};
