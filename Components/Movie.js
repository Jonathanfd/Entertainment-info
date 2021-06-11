import React, { useContext } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import MovieFromTrending from "../utility/context";

function Movie({ movie }) {
  const movieFromTrendingFunction = useContext(MovieFromTrending);
  return (
    <TouchableOpacity
      style={styles.imgContainer}
      onPress={() =>
        movieFromTrendingFunction.selectMovieFromTrending(movie.id)
      }
    >
      <Image
        source={{ uri: movie.poster }}
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
