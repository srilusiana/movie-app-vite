// import styles from "./Hero.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledHero = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3rem;

  .left {
    margin-bottom: 1rem;
  }

  .title {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .genre {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .desc {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }

  .poster {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .left {
      flex-basis: 40%;
    }

    .right {
      flex-basis: 60%;
    }
  }
`;

function Hero() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, []);

  return (
    <StyledHero>
      <div className="left">
        <h2 className="title">{movie.Title}</h2>
        <h3 className="genre">Genre: {movie.Genre}</h3>
        <p className="desc">{movie.Plot}</p>
        <button className="button">Watch</button>
      </div>
      <div className="right">
        <img className="poster" src={movie.Poster} alt={movie.Title} />
      </div>
    </StyledHero>
  );
}

export default Hero;
