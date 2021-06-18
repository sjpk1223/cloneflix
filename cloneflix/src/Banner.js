import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  // background img, movie title, 2 buttons(play, myList),description
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  // adds ... to the end of description if its too long
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="header_container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content_container">
        <h1 className="header_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="button_container">
          <button className="header_button">Play</button>
          <button className="header_button">My List</button>
        </div>
        <h1 className="header_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="header-fadebottom"></div>
    </header>
  );
}

export default Banner;
