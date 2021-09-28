import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import Input from "../common/Input";
import Title from "../common/Title";
import SendToLibrary from "../components/newBook/SendToLibrary";
import UploadImage from "../components/newBook/UploadImage";


export default function NewBook() {

  const [inputs, setInputs] = useState({
    title: '',
    author: '',
    review: ''
  })
   const [selectedImage, setSelectedImage] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title>Possui um novo livro?</Title>

        <View style={styles.infos}>
          <Input
            style={styles.input}
            value={inputs.title}
            name="title"
            changeValue={setInputs}
            placeholder="Titulo"
          />
          <Input
            style={styles.input}
            value={inputs.author}
            name="author"
            changeValue={setInputs}
            placeholder="Autor"
          />
          <Input
            style={styles.input}
            value={inputs.review}
            name="review"
            changeValue={setInputs}
            placeholder="Review"
          />
        </View>

        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <SendToLibrary
          title={inputs.title}
          author={inputs.author}
          review={inputs.review}
          image={selectedImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  infos: {
    marginVertical: 47,
  },
  input: {
    marginBottom: 15,
    fontFamily: "poppinsMedium"
  }
});
