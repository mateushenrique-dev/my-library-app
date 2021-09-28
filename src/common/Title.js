import React from 'react';
import { Text, StyleSheet } from "react-native";


export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "#70798C",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "poppinsBold",

    marginTop: 48,
    lineHeight: 36,
  },
});