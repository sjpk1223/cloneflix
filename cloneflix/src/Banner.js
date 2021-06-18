import React, { useEffect, useState } from "react";
import axios from "./axios";

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
  return (
    <header>
      <div></div>
    </header>
  );
}

export default Banner;
