import React from "react";
import Container from "../../components/Container";
import Background from "../../assets/ecology.svg";
import Button from "../../components/Button";
import { BarItem as Expand } from "../../components/Bar";
import { Box, Icon, Grid } from "@material-ui/core";

const Landing = () => {
  return (
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
          <Container maxWidth={500}>
            <Box fontSize={60} fontWeight="bold" color="#388e3c">
              SURVIVALL HEADER
            </Box>
            <Box fontSize={26} fontWeight="lighter" my={4}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
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
      <Expand my={5} color="inherit">
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
  );
};

export default Landing;
