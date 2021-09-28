import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Book from "../Book";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BookContext } from "../../../context/book";

export default function ListOfBooks({ showBook }) {

  const { setBooks, books } = useContext(BookContext)

  useEffect(() => {
    (async () => {
      try {
        const result = await AsyncStorage.getItem("books");

        if (result) {
          const booksParse = JSON.parse(result);

          setBooks(booksParse);
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {books.map((book) => {
        return <Book showBook={showBook} {...book} key={book.id} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginHorizontal: 18,
  },
});
