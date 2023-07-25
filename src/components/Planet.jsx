import styled from "styled-components";
import planets from "../Data.js";
import { useParams } from "react-router-dom";

const Section = styled.section``;

export default function Planet() {
  // use Parms to get the url parameter
  const { name } = useParams();
  // get the planet using name
  const planet = planets.find((planet) => planet.name === name);
  console.log(planet);
  // access the planet data as contants
  const {
    overview: { content: overviewContent, source: overviewSource },
    structure: { content: structureContent, source: structureSource },
    geology: { content: geologyContent, source: geologySource },
    rotation,
    revolution,
    radius,
    temperature,
    images: {
      planet: planetImage,
      internal: internalImage,
      geology: geologyImage,
    },
  } = planet;

  // render the component
  return (
    <Section>
      <img src={planetImage} />
      <p>{overviewContent}</p>
    </Section>
  );
}
