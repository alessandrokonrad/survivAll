import React from "react";
import { TextField as MInput, withStyles } from "@material-ui/core";

const CustomInput = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "primary"
    }
  }
})(MInput);

const Input = props => {
  return <CustomInput fullWidth {...props}></CustomInput>;
};

export default Input;
