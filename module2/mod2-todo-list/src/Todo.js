function Todo(props) {
  function handleDelete() {
    props.setTodoItems(prev => prev.filter(todo => todo.id !== props.id));
  }

  return (
    <li>
      {props.item}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Todo;
