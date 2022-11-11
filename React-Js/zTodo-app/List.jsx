const List = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <Item key={item.id} todo={item} completeTask={props.completeTask} />
      ))}
    </ul>
  );
};
