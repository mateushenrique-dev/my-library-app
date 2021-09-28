import React from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

import bookUpload from "../../../../assets/book_upload.png";

export default function UploadImage({ setSelectedImage, selectedImage }) {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar a galeria é obrigatória!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <TouchableOpacity onPress={openImagePickerAsync} style={styles.upload}>
      {selectedImage?.localUri ? (
        <Image
          style={styles.thumbnail}
          source={{ uri: selectedImage.localUri }}
        />
      ) : (
        <>
          <Image style={styles.bookUpload} source={bookUpload} />
          <Text style={styles.textUpload}>Upload da imagem</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookUpload: {
    marginBottom: 28,
  },
  textUpload: {
    fontSize: 12,
    color: "#70798C",
    fontFamily: "poppinsMedium",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    textAlign: "center",
    borderBottomColor: "#70798C",
    marginBottom: 48,
  },
  thumbnail: {
    width: 174,
    height: 174,
    marginBottom: 32,
  },
});
