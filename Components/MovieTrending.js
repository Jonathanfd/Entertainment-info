import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Movie from "./Movie";

function MovieTrending({ trending }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <View>
        <FlatList
          data={trending}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <Movie movie={item} />;
          }}
          horizontal
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    margin: 10,
  },
});
export default MovieTrending;
