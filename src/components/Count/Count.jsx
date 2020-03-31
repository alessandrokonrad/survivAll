import React from "react";
import { Box } from "@material-ui/core";

const Count = props => {
  const [count, setCount] = React.useState(0);
  const increment = value => {
    let c = props.start;
    let interval = setInterval(() => {
      setCount(c);
      if (c >= value) {
        setCount(value);
        clearInterval(interval);
        return;
      }
      c += props.increment;
    }, props.time || 0);
  };

  React.useEffect(() => {
    increment(props.target);
  }, []);

  return <Box {...props}>{count.toLocaleString("de-DE")}</Box>;
};

export default Count;
