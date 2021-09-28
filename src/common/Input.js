import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({
  placeholder,
  style,
  value,
  changeValue,
  name,
}) {
  function handleChangeField(text) {
    changeValue((oldValue) => {
      return { ...oldValue, [name]: text };
    });
  }

  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={handleChangeField}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 311,
    height: 40,
    borderBottomWidth: 1,
    fontSize: 16,
    borderBottomColor: "#A99985",
  },
});
