import React, { useEffect, useState } from "react";
import { addBookApi, deleteBookApi, getBookApi, updateBookApi } from "./apis/books";

import TableBook from "./components/TableBook";
import CreateBook from "./components/CreateBook";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBookApi().then(books => setBooks(books))
  }, [])

  const addBook = (book) => {
    return addBookApi(book)
      .then(data => {
        setBooks([...books, data])
      })
  }
  const updateBook = (book) => {
    return updateBookApi(book)
      .then(data => {
        return data
      })
  }

  const deleteBook = (id) => {
    return deleteBookApi(id)
      .then(data => {
        if (data.deletedCount === 1) {
          setBooks(books.filter(book => book._id !== id))
        }
      })
  }

  return (
    <div >
      <CreateBook onCreate={addBook} />
      <TableBook books={books} onDelete={deleteBook} onUpdate={updateBook} />
    </div>
  );
}

export default App;
