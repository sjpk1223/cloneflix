import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

// why are we deconstructing title, fetchUrl in parameters
function Row({ title, fetchUrl, isLargeRow }) {
  // setMovies is a setter for state variable (essentially this.setState)
  const [movies, setMovies] = useState([]); // using [] in argument because it is an array of objects
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // movie urls
    async function fetchData() {
      const request = await axios.get(fetchUrl); //await to wait for the promise
      setMovies(request.data.results); // setState
      //   return request;
      //   console.log(request);
    }
    fetchData();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  //   console.table(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        // npm module function, searches the trailer for the movie
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          // new URL(url)search gives us everything after "?" in url path
          // urlsearchparams allows us to GET everything after the "v"
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="poster_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`poster ${isLargeRow && "poster_large"}`} // style poster large if largerow
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} // if its a largerow then use poster path if not use backdrop path
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
