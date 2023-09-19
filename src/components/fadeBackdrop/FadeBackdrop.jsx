import React from "react";
import classes from "./FadeBackdrop.module.css";

const FadeBackdrop = () => {
  return <div className={classes.backdrop} />;
};

export default React.memo(FadeBackdrop);
