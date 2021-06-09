//this is to show N/A in case rotten tomatoes
const getRottenTomatoesRating = (arr) => {
  if (arr.length == 0) return "N/A";
  for (let rating of arr) {
    if (rating.Source == "Rotten Tomatoes") return rating.Value;
  }
  return "N/A";
};

//We receive the quantity of minutes "117 min" and we format to 1h 57m
const minutesToTime = (time) => {
  const hour = 60;
  const minutes = parseInt(time.split(" ")[0]);
  let util = Math.floor(minutes / 60);
  while (true) {
    if (minutes < hour) return `0:${minutes.toString()}m`;
    if (minutes >= hour && minutes < hour * (util + 1))
      return `${util}h ${minutes - `${hour * util}`}m`;
  }
};

//this function receives an array of genres, and we don't want to show more than 2 genres.
const getGenres = (genres) => {
  const genresArr = genres.split(",");
  return genresArr.length == 1
    ? genresArr[0]
    : `${genresArr[0]} /${genresArr[1]}`;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default {
  getRottenTomatoesRating,
  minutesToTime,
  getGenres,
  capitalizeFirstLetter,
};
