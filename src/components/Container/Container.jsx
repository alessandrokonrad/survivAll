import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import Loader from "../Loader";
import NormalContainer from "./NormalContainer";
import CenterContainer from "./CenterContainer";

const Container = props => {
  return props.center ? (
    <CenterContainer {...props} />
  ) : (
    <NormalContainer {...props} />
  );
};

export default Container;
