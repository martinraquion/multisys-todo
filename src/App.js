import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input />
          <button>Add Todo</button>
        </form>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}> - Todo 1</div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
