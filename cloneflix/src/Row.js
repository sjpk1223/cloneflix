import React, { useState, useEffect } from "react";
import axios from "./axios";

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
  //   console.table(movies);
  return <div></div>;
}

export default Row;
