import React, { useContext, useState } from "react";
import { StateContext } from "../context/stateContext";

function Todo() {
  const { state, dispatch } = useContext(StateContext);
  const [todo, setTodo] = useState("");
  const [toggleEdit, setToggleEdit] = useState({ id: null });
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
          <div
            key={todo.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              marginTop: 10,
              border: "1px solid cyan",
              padding: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() =>
                    dispatch({ type: "DONE_TODO", payload: todo })
                  }
                />

                <div
                  style={{
                    marginRight: 10,
                    textDecoration: todo.complete ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </div>
              </div>
              <div>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_TODO", payload: todo })
                  }
                >
                  Delete
                </button>
              </div>
            </div>

            {toggleEdit.id === todo.id && toggleEdit && (
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: "UPDATE_TODO",
                      payload: todo,
                      text: editText.length ? editText : todo.text,
                    });
                    setToggleEdit(false);
                  }}
                >
                  <input
                    defaultValue={todo.text}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
