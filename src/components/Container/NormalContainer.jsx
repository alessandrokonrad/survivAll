import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import Loader from "../Loader";

const NormalContainer = props => {
  return <Box {...props}>{props.loading ? <Loader /> : props.children}</Box>;
};

export default NormalContainer;
