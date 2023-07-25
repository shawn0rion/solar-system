import styled from "styled-components";
import { Link } from "react-router-dom";
import planets from "../Data.js";

const Nav = styled.nav``;

export default function Navbar() {
  // for each planet
  // create a link, using the planet name as the text and name as link
  return (
    <Nav>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <Link to={`/${planet.name}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
