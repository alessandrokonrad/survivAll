import React from "react";
import Header from "./components/Bar";
import Container from "./components/Container";
import { TopButton } from "./components/Button";
import { Router, Route } from "./components/Router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Home } from "./views";

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container minHeight="100vh">
        <Header />
        <Router>
          <Route exact path="/" component={Home} title="Home | SurvivAll" />
        </Router>
      </Container>
      <TopButton />
    </ThemeProvider>
  );
};

export default App;
