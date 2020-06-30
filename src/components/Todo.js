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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}> - Todo 1</div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
