import React from "react";
import Container from "../Container";
import BarItem from "./BarItem";
import Drawer from "./Drawer";
import Button from "../Button";
import { useTheme, useMediaQuery, Box, Icon } from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import Banner from "../../assets/banner.svg";

const Bar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <Container center height={110} width={1}>
      {matches ? (
        <Container width={0.9} fontSize={28} display="flex" alignItems="center">
          <BarItem onClick={() => setOpenDrawer(true)} flex={1}>
            <Icon fontSize="large">menu</Icon>
          </BarItem>
          <Container
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={2}
            width={1}
          >
            <img style={{ marginRight: 10 }} src={Logo} width={50} />

            <Box fontFamily="'Nunito', sans-serif" fontSize={32}>
              <span style={{ color: "#4fc3f7" }}>S</span>urviv
              <span style={{ color: "#388e3c" }}>A</span>ll
            </Box>
          </Container>
          <Box flex={1} />
          {/* Drawer */}
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <BarItem mt={3}>Home</BarItem>
            <BarItem mt={3}>Project</BarItem>
            <BarItem mt={3}>Technology</BarItem>
            <BarItem mt={3}>Advantages</BarItem>
            <BarItem mt={3}>Company</BarItem>
            <BarItem mt={3}>Press</BarItem>
            <BarItem mt={3}>News</BarItem>
            <BarItem mt={3}>Contact</BarItem>
            <Container mt={5} mb={3} center>
              <Button>Support us</Button>
            </Container>
          </Drawer>
        </Container>
      ) : (
        <Container display="flex" width={0.9} alignItems="center">
          <img
            style={{ position: "absolute", left: 0, top: 0 }}
            width={550}
            src={Banner}
          />
          <img style={{ marginRight: 10 }} src={Logo} width={70} />
          <Box flex={3} fontFamily="'Nunito', sans-serif" fontSize={42}>
            <span style={{ color: "#4fc3f7" }}>S</span>urviv
            <span style={{ color: "#388e3c" }}>A</span>ll
          </Box>
          <Box
            flex={7}
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <BarItem>Home</BarItem>
            <BarItem>Project</BarItem>
            <BarItem>Technology</BarItem>
            <BarItem>Advantages</BarItem>
            <BarItem>Company</BarItem>
            <BarItem>Press</BarItem>
            <BarItem>News</BarItem>
            <BarItem>Contact</BarItem>
            <Button>Support us</Button>
            {/* <BarItem></BarItem> */}
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default Bar;
