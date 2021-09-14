import React, { useState, useEffect } from "react";
import "./App.css";

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
    </div>
  );
}

export default App;
