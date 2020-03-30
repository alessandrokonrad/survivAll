import React from "react";
import { Fab as MFab, Icon } from "@material-ui/core";

const Fab = props => {
  const [scrollPos, setScrollPos] = React.useState(0);

  const handleScroll = () => setScrollPos(window.scrollY);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return scrollPos > 500 ? (
    <MFab
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="small"
      style={{
        color: "black",
        background: "whitesmoke",
        position: "fixed",
        right: 30,
        bottom: 30
      }}
    >
      <Icon>expand_less</Icon>
    </MFab>
  ) : (
    <React.Fragment />
  );
};

export default Fab;
