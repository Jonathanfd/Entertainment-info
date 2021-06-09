import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Constants from "expo-constants";
//import { LinearGradient } from "expo-linear-gradient";
import utils from "./utility/utils";

import client from "./api/client";
import AppHeader from "./Components/AppHeader";

import MovieInfo from "./Components/MovieInfo";

export default function App() {
  const [title, setTitle] = useState("");
  const [rtRating, setRtRating] = useState("");
  const [imdbRating, setImdbRating] = useState("");
  const [poster, setPoster] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [storyLine, setStoryLine] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");

  const getMovieInfo = async (name) => {
    try {
      setLoading(true);
      const { data } = await client.get(name);
      const movieInfo = await data;
      setLoading(false);

      if (movieInfo.Error == "Movie not found!")
        return Alert.alert("Sorry", `No results found for "${name}"`, [
          { text: "Ok" },
        ]);

      setMovieInfo(movieInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const setMovieInfo = (movieInfo) => {
    const rottenTomatoesRating = utils.getRottenTomatoesRating(
      movieInfo.Ratings
    );
    const imdbRating =
      movieInfo.imdbRating == "N/A" ? "N/A" : `${movieInfo.imdbRating}%`;

    const movieTime = utils.minutesToTime(movieInfo.Runtime);
    const genres = utils.getGenres(movieInfo.Genre);
    const type = utils.capitalizeFirstLetter(movieInfo.Type);

    setPoster(movieInfo.Poster);
    setTitle(movieInfo.Title);
    setType(type);
    setYear(movieInfo.Year);
    setGenre(genres);
    setTime(movieTime);
    setRtRating(rottenTomatoesRating);
    setImdbRating(imdbRating);
    setStoryLine(movieInfo.Plot);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeIn" duration={3000}>
        <AppHeader
          value={movieTitle}
          onChangeText={(title) => setMovieTitle(title)}
          getMovieInfo={() => getMovieInfo(movieTitle)}
        />

        <ImageBackground
          source={require("./assets/background.jpg")}
          style={styles.imgContainer}
        >
          <ActivityIndicator color="#FF9F00" size="large" animating={loading} />
          {title != "" && (
            <MovieInfo
              imdbRating={imdbRating}
              rtRating={rtRating}
              title={title}
              poster={poster}
              storyLine={storyLine}
              type={type}
              year={year}
              genre={genre}
              time={time}
            />
          )}
        </ImageBackground>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
  },
  imgContainer: {
    height: "100%",
    width: "100%",
  },
});

{
  /* <LinearGradient
colors={["#000000", "#212121", "#2C5364"]}
style={styles.container}
start={{ x: 0.99, y: 0.8 }}
>

</LinearGradient> */
}
