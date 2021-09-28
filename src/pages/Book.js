import React from "react";
import { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BookContext } from "../context/book";
import * as ImagePicker from "expo-image-picker";

import marker from "../../assets/marker.png";
import markerMarked from "../../assets/marker-check.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Book() {
  const { actualBook, setActualBook, setBooks } = useContext(BookContext);

  async function deleteImage() {
    try {
      const booksFromStorage = await AsyncStorage.getItem("books");

      const books = JSON.parse(booksFromStorage);

      const book = books.findIndex((book) => book.id === actualBook.id);

      books[book].image = undefined;

      const booksToStorage = JSON.stringify(books);

      await AsyncStorage.setItem("books", booksToStorage);

      setActualBook(books[book]);
      setBooks(books)
    } catch (error) {
      alert(error.message);
    }
  }

  async function alterImage() {
    try {
      const booksFromStorage = await AsyncStorage.getItem("books");

      const books = JSON.parse(booksFromStorage);

      const book = books.findIndex((book) => book.id === actualBook.id);

      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permissão para acessar a galeria é obrigatória!");
        return;
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();

      books[book].image = { localUri: pickerResult.uri };

      const booksToStorage = JSON.stringify(books);

      await AsyncStorage.setItem("books", booksToStorage);

      setActualBook(books[book]);
      setBooks(books)
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.marker}
            source={actualBook.marked ? markerMarked : marker}
          />
          <View style={styles.infos}>
            <Text style={styles.infoTitle}>{actualBook.title}</Text>
            <Text style={styles.infoAuthor}>{actualBook.author}</Text>
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <Text style={styles.review}>{actualBook.review}</Text>
        </View>
        <View style={styles.imageContainer}>
          {actualBook.image ? (
            <Image
              style={styles.bookImage}
              source={{ uri: actualBook.image.localUri }}
            />
          ) : (
            <Text style={styles.imageLogo}>{actualBook.title[0].toUpperCase()}</Text>
          )}
        </View>
        <View style={styles.alterImage}>
          <TouchableOpacity onPress={deleteImage}>
            <Text style={styles.change}>DELETAR IMAGEM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={alterImage}>
            <Text style={styles.change}>ALTERAR IMAGEM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 52,
  },
  header: {
    flexDirection: "row",
    marginBottom: 38,

  },
  infoTitle: {
    fontSize: 18,
    fontFamily: "poppinsBold",
    textTransform: "uppercase",
    color: "#70798C",
    maxWidth: 200,
    letterSpacing: 1,
  },
  infos: {
    marginLeft: 18,
  },
  infoAuthor: {
    color: "#A99985",
    fontFamily: "poppinsMedium",
  },
  reviewContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#70798C",
    borderTopWidth: 1,
    borderTopColor: "#70798C",
    paddingVertical: 22,
    marginBottom: 58,
  },
  review: {
    color: "#A99985",
    fontFamily: "poppinsMedium",
  },
  imageLogo: {
    fontSize: 120,
    width: 216,
    height: 216,
    color: "#A99985",
    textAlign: "center",
    paddingTop: 22,
  },
  bookImage: {
    width: 216,
    height: 216,
    borderRadius: 25,
  },
  imageContainer: {
    alignItems: "center",
  },
  alterImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  change: {
    color: "#70798C",
    letterSpacing: 1,
    paddingBottom: 62,
    fontFamily: "poppinsMedium",
  },
  marker: {
    marginTop: 5
  }
});
