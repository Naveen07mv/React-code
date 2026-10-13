import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const [movieList,setMovieList] = useState([]);
  const [Movie, setMovie] = useState(null)
  useEffect(() => {
    axios.get("http://localhost:5001/api/movies")
      .then((res) => {
        setMovieList(res.data)
      })
  }, [])
  const MovieDetails = (id) => {
    axios.get(`http://localhost:5001/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data)
      })
  }
  return (
    <div >
      <h1>Movie List</h1>
      {movieList.map((movie) => (
        <div>
          <button onClick={() => MovieDetails(movie.id)}> {movie.title} </button>
        </div>
      ))}
        <div>
          <h3>Movie Details</h3>
        </div>

    </div>
  )
}
export default Movie