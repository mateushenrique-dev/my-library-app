import React, { useState } from 'react';

export const BookContext = React.createContext({});

export default function BookContextWrapper({ children }) {
  const [actualBook, setActualBook] = useState({})
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ actualBook, setActualBook, books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
