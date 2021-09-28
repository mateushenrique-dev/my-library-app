import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import book from "../../../../assets/book.png";
import Title from "../../../common/Title";

export default function Header({ addBook }) {
  return (
    <View>
      <Title>Minha Biblioteca</Title>
      <TouchableOpacity style={styles.button} onPress={addBook}>
        <Image style={styles.buttonIcon} source={book} />
        <Text style={styles.buttonText} >
          Adicionar um livro
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A99985",
    flexDirection: "row",
    paddingVertical: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    borderRadius: 8,
    width: 224,
    marginRight: "auto",
    marginLeft: "auto",
  },
  buttonText: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#F5F1ED",
    fontFamily: "poppinsMedium",
    letterSpacing: 1.5,
    marginLeft: 19,
  },
  buttonIcon: {},
});
