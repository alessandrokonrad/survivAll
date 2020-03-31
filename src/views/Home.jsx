import React from "react";
import Container from "../components/Container";
import { Landing, Project } from "./subviews";

const Home = () => {
  return (
    <Container>
      <Landing />
      <Project />
      <Container width={1} height={800} bgcolor="white"></Container>
    </Container>
  );
};

export default Home;
