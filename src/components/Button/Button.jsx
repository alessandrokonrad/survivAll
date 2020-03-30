import React from "react";
import NormalButton from "./NormalButton";
import FlatButton from "./FlatButton";

const Button = props => {
  return props.flat ? <FlatButton {...props} /> : <NormalButton {...props} />;
};

export default Button;
