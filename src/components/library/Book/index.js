import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import marker from "../../../../assets/marker.png";
import markerMarked from "../../../../assets/marker-check.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BookContext } from "../../../context/book";

export default function Book({
  title,
  image,
  author,
  review,
  id,
  marked,
  showBook,
}) {
  const [isMarked, setIsMarked] = useState(false);
  const { setActualBook } = useContext(BookContext);

  async function mark() {
    setIsMarked(!marked);

    const booksInStorage = await AsyncStorage.getItem("books");
    const books = JSON.parse(booksInStorage);

    const book = books.findIndex((book) => book.id === id);

    if (!books[book].marked) {
      books[book].marked = true;
    } else {
      books[book].marked = false;
    }

    const booksToStorage = JSON.stringify(books);

    await AsyncStorage.setItem("books", booksToStorage);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.book}
        onPress={() => {
          setActualBook({ title, image, author, review, id, marked });
          showBook();
        }}
      >
        {image ? (
          <Image style={styles.bookImage} source={{ uri: image?.localUri }} />
        ) : (
          <Text style={styles.bookImageText}>{title[0].toUpperCase()}</Text>
        )}

        <View style={styles.bookInfos}>
          <Text style={styles.bookTitle}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookMarker} onPress={mark}>
        <Image source={marked || isMarked ? markerMarked : marker} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 0.2,
    paddingVertical: 16,
    borderColor: "#70798C",
  },
  bookImage: {
    width: 67,
    height: 67,
    borderRadius: 8,
    marginRight: 15,
  },
  bookInfos: {},
  bookTitle: {
    fontSize: 13,
    color: "#70798C",
    fontFamily: "poppinsBold",
    textTransform: "uppercase",
    letterSpacing: 3,
    lineHeight: 19,
    maxWidth: 200,
  },
  bookAuthor: {
    fontSize: 10,
    fontFamily: "poppinsMedium",
    color: "#A99985",
    lineHeight: 15,
  },
  bookMarker: {
    marginLeft: "auto",
  },
  book: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookImageText: {
    width: 67,
    height: 67,
    marginRight: 15,
    fontSize: 48,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#A99985",
  },
});
