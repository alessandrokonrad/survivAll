import React from "react";
import { Link as MLink, makeStyles } from "@material-ui/core";

const Link = props => {
  return (
    <MLink style={{ cursor: "pointer" }} onClick={() => props.onClick()}>
      {props.children}
    </MLink>
  );
};

export default Link;
