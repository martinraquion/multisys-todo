import React, { useContext, useState } from "react";
import { StateContext } from "../context/stateContext";

function TodoList() {
  const { state, dispatch } = useContext(StateContext);
  const [todo, setTodo] = useState("");
  const [toggleEdit, setToggleEdit] = useState({});
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  const handleEdit = (id) => {
    setToggleEdit({ id: id, state: !toggleEdit });
  };

  const todoList = state.todos;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        {todoList.map((todo) => (
          <div key={todo.id} style={{ display: "flex", marginTop: 10 }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: "DONE_TODO", payload: todo })}
            />

            <div style={{ marginRight: 10 }}>{todo.text}</div>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo })}
            >
              Delete
            </button>
            {toggleEdit.id === todo.id && toggleEdit && (
              <div>
                <input
                  defaultValue={todo.text}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "UPDATE_TODO",
                      payload: todo,
                      text: editText.length ? editText : todo.text,
                    });
                    setToggleEdit(false);
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
