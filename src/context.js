import { createContext } from "react";
// import uuid4 from "uuid4";

const TodoContext = createContext({
  todos: [{}],
  currentTodo: {},
});

export default TodoContext;
