import React from "react";
import classes from "./FadeBackdrop.module.css";

const FadeBackdrop = ({ setIsAboutPageVisible }) => {
  setTimeout(() => {
    setIsAboutPageVisible(false);
  }, 5500);

  return <div className={classes.backdrop} />;
};

export default React.memo(FadeBackdrop);
