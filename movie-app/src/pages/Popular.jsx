import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      const response = await axios.get(URL);
      setMovies(response.data.results);
    }
    fetchPopularMovie();
  }, []);

  return (
    <>
      {movies.length > 0 && <Hero movie={movies[0]} />}
      <Movies movies={movies.slice(1)} />
    </>
  );
}

export default Popular;
