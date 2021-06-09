import axios from "axios";

const apikey = "c6b68182";

const moviesInfo = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${apikey}&t=`,
});

export default moviesInfo;
