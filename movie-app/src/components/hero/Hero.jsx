// import styles from "./Hero.module.css";
import styled from "styled-components";
import Button from "../UI/button/Index";

const StyledHero = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3rem;

  .left {
    margin-bottom: 1rem;
    flex-basis: 40%;
  }

  .right {
    flex-basis: 60%;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }

  img {
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
  }
`;

function Hero({ movie }) {
  if (!movie) return null;

  return (
    <StyledHero>
      <div className="left">
        <h1>{movie.title || movie.name}</h1>
        <h2>Rating: {movie.vote_average}</h2>
        <p>{movie.overview}</p>
        <Button size="md" variant="primary">Watch</Button>
      </div>
      <div className="right">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
      </div>
    </StyledHero>
  );
}

export default Hero;
