import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const primaryStyles = makeStyles({
  root: {
    background: "linear-gradient(left, green 0%, green 80%, green 100%)",
    border: 0,
    borderRadius: 20,
    textTransform: "none",
    color: "white",
    transition: "0.5s",
    "&:hover": {
      filter: "brightness(1.2)"
    }
  }
});

const NormalButton = props => {
  const styles = primaryStyles();
  return (
    <Button
      {...props}
      disableRipple
      className={styles.root}
      style={{
        height: props.height ? props.height : 48,
        width: props.width,
        padding: props.padding ? props.padding : "0 30px"
      }}
    >
      {props.children}
    </Button>
  );
};

export default NormalButton;
