import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import Movie from "./Movie";

function MovieTrending({ trending }) {
  console.log(trending);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <FlatList
        data={trending}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <Movie poster={item.poster} />;
        }}
        horizontal
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    margin: 10,
  },
});
export default MovieTrending;
