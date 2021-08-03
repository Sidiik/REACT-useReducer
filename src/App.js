import React from "react";
import { BookProvider } from "./Contexts/BooksContext";
import Books from "./Components/Books";
function App() {
  return (
    <div className="app mt-4 rounded">
      <BookProvider>
        <Books />
      </BookProvider>
    </div>
  );
}

export default App;
