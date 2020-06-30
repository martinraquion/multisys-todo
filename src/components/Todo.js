import React, { useContext, useState } from "react";
// import TodosContext from "../context";
import { StateContext } from "../context/stateContext";

function Todo() {
  const { state, dispatch } = useContext(StateContext);
  const [todo, setTodo] = useState("");
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  const todoList = state.todos;
  //   console.log(todoList);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        {todoList.map((todo) => (
          <div key={todo.id} style={{ display: "flex", marginTop: 10 }}>
            <div style={{ marginRight: 10 }}> {todo.text}</div>
            <button>Edit</button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
