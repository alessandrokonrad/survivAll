import React from "react";
import { Box } from "@material-ui/core";
import Loader from "../Loader";

const CenterContainer = props => {
  return (
    <Box
      {...props}
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      {props.loading ? <Loader /> : props.children}
    </Box>
  );
};

export default CenterContainer;
