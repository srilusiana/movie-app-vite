// import styles from "./Navbar.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <h1>Movie App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movie/create">Add Movie</Link></li>
        <li><Link to="/movie/popular">Popular</Link></li>
        <li><Link to="/movie/now">Now Playing</Link></li>
        <li><Link to="/movie/top">Top Rated</Link></li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
