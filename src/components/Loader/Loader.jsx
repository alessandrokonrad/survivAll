import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const Loader = props => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      width={1}
      height={1}
    >
      <CircularProgress {...props} />
    </Box>
  );
};

export default Loader;
