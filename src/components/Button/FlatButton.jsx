import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const primaryStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 5,
    textTransform: "none",
    "&:hover": {
      background:
        "linear-gradient(left, #52A0FD 0%, #00e2fa 80%, #00e2fa 100%)",
      color: "white"
    }
  },
  active: {
    background: "linear-gradient(left, #52A0FD 0%, #00e2fa 80%, #00e2fa 100%)",
    color: "white"
  }
});

const FlatButton = props => {
  const styles = primaryStyles();

  return (
    <Button
      {...props}
      disableRipple
      className={`${styles.root} ${props.active && styles.active}`}
      style={{
        height: props.height ? props.height : 48,
        width: props.width,
        padding: props.padding ? props.padding : "5px 30px"
      }}
    >
      {props.children}
    </Button>
  );
};

export default FlatButton;
