import React, { useState } from "react";
import utils from "../utility/utils";
import client from "../api/client";
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import AppHeader from "../Components/AppHeader";

const getMovies = () => {
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
};

export default {
  title,
  rtRating,
  imdbRating,
  poster,
  movieTitle,
  setMovieTitle,
  storyLine,
  type,
  year,
  genre,
  time,
  loading,
  getMovieInfo,
  getMovies,
};
