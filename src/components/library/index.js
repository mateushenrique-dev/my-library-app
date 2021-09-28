import React from "react";
import { View } from "react-native";
import Header from "./Header";
import ListOfBooks from "./ListOfBooks";

export default function Library({ addBook, showBook }) {
  return (
    <View>
      <Header addBook={addBook} />
      <ListOfBooks showBook={showBook} />
    </View>
  );
}

