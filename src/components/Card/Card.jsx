import React from "react";
import Container from "../Container";

const Card = props => {
  return (
    <Container bgcolor="white" borderRadius={5} {...props}>
      {props.children}
    </Container>
  );
};

export default Card;
