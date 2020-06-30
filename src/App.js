import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import StateProvider from "./context/stateContext";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <header className="App-header">
          <Todo />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
