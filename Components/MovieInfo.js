import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

function MovieInfo(props) {
  const {
    poster,
    title,
    rtRating,
    imdbRating,
    storyLine,
    type,
    year,
    genre,
    time,
  } = props;

  return (
    <Animatable.View
      style={{ flex: 1, height: "100%" }}
      animation="fadeIn"
      duration={2000}
    >
      <View style={styles.imgContainer}>
        {poster && poster != "N/A" ? (
          <Image
            source={{ uri: poster }}
            style={styles.poster}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/background.jpg")}
            style={styles.poster}
            resizeMode="contain"
          />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subTitle}>{type}</Text>
        <Text style={styles.subTitle}>{year}</Text>
        <Text style={styles.subTitle}>{genre}</Text>
        <Text style={styles.subTitle}>{time}</Text>
      </View>

      <View style={styles.ratingContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={
              Number(rtRating.split("%")[0]) >= 70
                ? require("../assets/rotten-good.png")
                : require("../assets/rotten-bad.png")
            }
            style={styles.ratingImage}
            resizeMode="contain"
          />
          <Text style={styles.ratingPorcent}>{` ${rtRating}`}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/imdb.png")}
            style={styles.ratingImage}
            resizeMode="contain"
          />
          <Text style={styles.ratingPorcent}>{` ${imdbRating}`}</Text>
        </View>
      </View>
      {storyLine != "" && storyLine !== "N/A" && (
        <View>
          <ScrollView style={styles.storyCastContainer}>
            <Text style={styles.storyLine}>Story line:</Text>
            <Text style={styles.subTitle}>{storyLine}</Text>
          </ScrollView>
        </View>
      )}
    </Animatable.View>
  );
}
const height = 280;
const styles = StyleSheet.create({
  imgContainer: {
    alignSelf: "center",
    borderRadius: 250,
    overflow: "hidden",
    borderColor: "#FF9F00",
    borderWidth: 0.5,
  },
  poster: {
    height: height,
    width: height,
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    margin: 10,
  },
  subTitle: {
    color: "white",
    fontSize: 15,
    margin: 8,
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  ratingImage: {
    width: 60,
    height: 60,
  },
  ratingPorcent: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  storyCastContainer: {
    backgroundColor: "black",
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    paddingBottom: 20,
  },
  storyLine: {
    color: "white",
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
});
export default MovieInfo;
