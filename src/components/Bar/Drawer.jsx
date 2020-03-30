import React from "react";
import { Drawer as MDrawer, Box } from "@material-ui/core";
import Container from "../Container";
import Logo from "../../assets/logo.svg";

const Drawer = props => {
  return (
    <MDrawer {...props}>
      <Container center width={250}>
        <Container width={0.7}>
          <Container
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={1}
            my={3}
          >
            <img style={{ marginRight: 5 }} src={Logo} width={40} />
            <Box fontFamily="'Nunito', sans-serif" fontSize={26}>
              Surviv<span style={{ color: "#388e3c" }}>A</span>ll
            </Box>
          </Container>
          <Container center width={1} height={2}>
            <Box height={1} width={1} bgcolor="whitesmoke" />
          </Container>
          {props.children}
        </Container>
      </Container>
    </MDrawer>
  );
};

export default Drawer;
