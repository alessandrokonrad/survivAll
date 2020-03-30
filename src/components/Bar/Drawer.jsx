import React from "react";
import { Drawer as MDrawer, Box } from "@material-ui/core";
import Container from "../Container";

const Drawer = props => {
  return (
    <MDrawer {...props}>
      <Container center width={250}>
        <Container width={0.7} height={0.8}>
          <Box width={1} fontFamily="'Fredoka One', cursive" fontSize={26}>
            Surviv<span style={{ color: "green" }}>A</span>ll
          </Box>
          {props.children}
        </Container>
      </Container>
    </MDrawer>
  );
};

export default Drawer;
