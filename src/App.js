import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import StateProvider from "./context/stateContext";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <header className="App-header">
          <h3 style={{ marginBottom: 0, color: "cyan" }}>TODO APP</h3>
          <h6 style={{ marginTop: 5 }}> by: Martin Raquion</h6>
          <Todo />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
