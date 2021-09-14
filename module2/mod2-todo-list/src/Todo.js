function Todo(props) {
  return (
    <li>
      {props.item}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Todo;
