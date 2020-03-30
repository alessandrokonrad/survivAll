import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  item: {
    "&:hover": { background: "none", color: "green", cursor: "pointer" }
  }
}));

const BarItem = props => {
  const classes = useStyles();
  return (
    <Box fontSize={18} className={classes.item} {...props}>
      {props.children}
    </Box>
  );
};

export default BarItem;
