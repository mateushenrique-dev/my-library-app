import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ScrollView } from "react-native";
import Library from '../components/library';

export default function Books({ navigation }) {

  function addBook() {
    navigation.navigate("newBook");
  }

  function showBook() {
    navigation.navigate("book");
  }

  return (
    <ScrollView>
      <Library addBook={addBook} showBook={showBook} />
    </ScrollView>
  );
}