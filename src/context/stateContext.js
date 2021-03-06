import React, { createContext, useReducer } from "react";
import reducer from "../reducer/stateReducer";

import { v4 as uuidv4 } from "uuid";

export const StateContext = createContext();

let todosContext = {
  todos: [
    {
      id: uuidv4(),
      text: "Initial Todo",
      complete: false,
    },
  ],
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, todosContext);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
