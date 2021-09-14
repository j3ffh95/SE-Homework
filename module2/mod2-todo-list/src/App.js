import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("todoData")) {
      setTodoItems(JSON.parse(localStorage.getItem("todoData")));
    }
  }, []);

  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className='App'>
      <h1>Todo App</h1>
      <AddTodoForm setTodoItems={setTodoItems} />
      <ul>
        {todoItems.map(todo => (
          <Todo
            setTodoItems={setTodoItems}
            id={todo.id}
            item={todo.item}
            // species={pet.species}
            // age={pet.age}
            // key={pet.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
