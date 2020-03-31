import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const primaryStyles = makeStyles({
  root: {
    background: props =>
      `linear-gradient(left, ${props.bgcolor ||
        "#388e3c"} 0%, ${props.bgcolor || "#388e3c"} 80%, ${props.bgcolor ||
        "#388e3c"} 100%)`,
    border: 0,
    borderRadius: 20,
    textTransform: "none",
    color: props => props.textColor || "white",
    "&:hover": {
      filter: "brightness(1.2)"
    }
  }
});

const NormalButton = props => {
  const styles = primaryStyles(props);
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
