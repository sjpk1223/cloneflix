import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
// why are we deconstructing title, fetchUrl in parameters
function Row({ title, fetchUrl }) {
  // setMovies is a setter for state variable (essentially this.setState)
  const [movies, setMovies] = useState([]); // using [] in argument because it is an array of objects

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
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="poster_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
