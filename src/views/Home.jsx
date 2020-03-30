import React from "react";
import Container from "../components/Container";
import Background from "../assets/ecology.svg";
import Button from "../components/Button";
import { BarItem as Expand } from "../components/Bar";
import { Box, Icon, Grid, IconButton } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <Container width={1} center minHeight="90vh">
        <Grid container spacing={3} style={{ width: "80%", paddingTop: 30 }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Container maxWidth={400}>
              <Box fontSize={46} fontWeight="bold">
                SurvivAll Header
              </Box>
              <Box fontSize={26} fontWeight="lighter" my={4}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Box>
              <Button>Support us</Button>
              <Box pt={10}></Box>
            </Container>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{
                transform: "scaleX(-1)"
              }}
              width="100%%"
              src={Background}
            ></img>
          </Grid>
        </Grid>
        <Expand mt={10} color="inherit">
          {" "}
          <Icon
            fontSize="large"
            onClick={() =>
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            expand_more
          </Icon>
        </Expand>
      </Container>

      <Container id="project" width={1} height={800} bgcolor="#388e3c">
        <Container
          width={1}
          textAlign="center"
          color="white"
          pt={4}
          fontSize={40}
        >
          Project
        </Container>
        <Container
          pt={4}
          width={1}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        ></Container>
      </Container>
      <Container
        id="project"
        width={1}
        height={800}
        bgcolor="white"
      ></Container>
    </Container>
  );
};

export default Home;
