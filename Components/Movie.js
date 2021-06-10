import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

function Movie({ poster, onSelectMovie }) {
  return (
    <TouchableOpacity style={styles.imgContainer} onPress={onSelectMovie}>
      <Image
        source={{ uri: poster }}
        style={styles.poster}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  imgContainer: {
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF9F00",
    margin: 10,
  },
  poster: {
    height: 250,
    width: 180,
  },
});
export default Movie;
