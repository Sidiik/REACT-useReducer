import React, { createContext, useReducer } from "react";
import uuid from "uuid/dist/v4";
import { BookReducers } from "./reducers/BookReducers";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(BookReducers, []);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
