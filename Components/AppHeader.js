import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppHeader({ movieTitle, onChangeText, getMovieInfo, onPressHome }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHome}>
        <MaterialCommunityIcons name="movie-open" size={55} color="#FF9F00" />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="cloud-search" size={24} color="#FF9F00" />
        <TextInput
          placeholder="Search movies or series ..."
          placeholderTextColor="#FF9F00"
          style={styles.input}
          autoCorrect={false}
          value={movieTitle}
          onChangeText={onChangeText}
          onSubmitEditing={getMovieInfo}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#FF9F00",
    borderBottomWidth: 3,
    paddingLeft: 10,
  },
  input: {
    color: "#FF9F00",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 18,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    margin: 15,
    borderWidth: 1,
    borderColor: "grey",
    width: "80%",
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
export default AppHeader;
