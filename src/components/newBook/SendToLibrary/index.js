import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from 'uuid';
import { BookContext } from "../../../context/book";

export default function SendToLibrary({ title, author, image, review }) {

  const { setBooks } = useContext(BookContext);

  async function saveBook() {
    try {
      if (!title) {
        throw new Error("Titulo não definido");
      }

      if (!author) {
        throw new Error("Autor não definido");
      }

      const result = await AsyncStorage.getItem("books");
      
      if (result) {
        const books = JSON.parse(result);
        books.push({ title, author, image, review, id: uuid(), marked: false });

        const book = JSON.stringify(books);

        await AsyncStorage.setItem("books", book);
        setBooks(books);
      } else {
        const book = JSON.stringify([
          {
            id: uuid(),
            title,
            author,
            image,
            review,
            marked: false
          },
        ]);

        await AsyncStorage.setItem("books", book);
        const books = await AsyncStorage.getItem("books")
        setBooks(JSON.parse(books));
      }
       alert("Livro adicionado a sua biblioteca :D");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <TouchableOpacity
      disabled={false}
      style={styles.addBook}
      onPress={saveBook}
    >
      <Text style={styles.addBookText}>Adicionar a biblioteca</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addBook: {
    width: 224,
    height: 39,
    backgroundColor: "#70798C",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addBookText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "poppinsMedium",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
