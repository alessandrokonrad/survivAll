import React from "react";
import Container from "../Container";
import BarItem from "./BarItem";
import Drawer from "./Drawer";
import { useTheme, useMediaQuery, Box, Icon } from "@material-ui/core";

const Bar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <Container center height={100} width={1}>
      {matches ? (
        <Container width={0.9} fontSize={28} display="flex" alignItems="center">
          <BarItem onClick={() => setOpenDrawer(true)} flex={1}>
            <Icon fontSize="large">menu</Icon>
          </BarItem>
          <Box
            flex={2}
            width={1}
            fontFamily="'Fredoka One', cursive"
            fontSize={30}
            textAlign="center"
          >
            Surviv<span style={{ color: "green" }}>A</span>ll
          </Box>
          <Box flex={1} />
          {/* Drawer */}
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <BarItem mt={4}>Home</BarItem>
            <BarItem mt={3}>Project</BarItem>
            <BarItem mt={3}>Technology</BarItem>
            <BarItem mt={3}>Advantages</BarItem>
            <BarItem mt={3}>Company</BarItem>
            <BarItem mt={3}>Press</BarItem>
            <BarItem mt={3}>News</BarItem>
            <BarItem mt={3}>Contact</BarItem>
            <BarItem mt={3}>Support us</BarItem>
          </Drawer>
        </Container>
      ) : (
        <Container display="flex" width={0.9} alignItems="center">
          <Box flex={3} fontFamily="'Fredoka One', cursive" fontSize={40}>
            Surviv<span style={{ color: "green" }}>A</span>ll
          </Box>
          <Box flex={7} display="flex" justifyContent="space-evenly">
            <BarItem>Home</BarItem>
            <BarItem>Project</BarItem>
            <BarItem>Technology</BarItem>
            <BarItem>Advantages</BarItem>
            <BarItem>Company</BarItem>
            <BarItem>Press</BarItem>
            <BarItem>News</BarItem>
            <BarItem>Contact</BarItem>
            <BarItem>Support us</BarItem>
          </Box>
        </Container>
      )}
    </Container>
  );
};

export default Bar;
