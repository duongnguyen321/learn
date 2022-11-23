import React, { createContext, useReducer } from "react";
import { rootReducer } from "../rootReducer";
export const StateContext = createContext();
export default function StateProvider({children}) {
  const initState = { todos: [] };
  const [state, dispatch] = useReducer(rootReducer, initState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
