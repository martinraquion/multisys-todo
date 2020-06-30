import { v4 as uuidv4 } from "uuid";
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      const addedTodo = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodo,
      };

    default:
      return state;
  }
}
