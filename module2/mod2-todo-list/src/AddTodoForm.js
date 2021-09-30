import React, { useState } from "react";

function AddTodoForm(props) {
  const [item, setItem] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setTodoItems(prev => prev.concat({ item, id: Date.now() }));
    setItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Todo</legend>
        <input
          value={item}
          onChange={e => setItem(e.target.value)}
          placeholder='Item'
        />

        <button>Add Todo Item</button>
      </fieldset>
    </form>
  );
}

export default AddTodoForm;
