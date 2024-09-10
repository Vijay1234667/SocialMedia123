import React from "react";
import { Container } from "react-bootstrap";
import HeaderPage from "./HeaderPage";
import AboutBio from "./AboutBio";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <HeaderPage />
          <AboutBio/>
        </Container>
      </section>
    </>
  );
};

export default About;
