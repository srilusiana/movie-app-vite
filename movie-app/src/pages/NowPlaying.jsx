import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
      const response = await axios(URL);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovie();
  }, []);

  return (
    <>
        <Hero movie={movies[0]} />
        <Movies movies={movies.slice(1)} />
    </>
  );
}

export default NowPlaying;
