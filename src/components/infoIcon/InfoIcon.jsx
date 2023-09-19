import React from "react";
import info from "../../assets/info.svg";
import classes from "./InfoIcon.module.css";

const InfoIcon = ({ setIsInfoClicked }) => {
  const clickHandler = () => {};

  return (
    <button
      className={classes.container}
      onClick={() => setIsInfoClicked(true)}
    >
      <img
        src={info}
        alt="information"
        className={classes.icon}
        onClick={clickHandler}
      />
    </button>
  );
};

export default React.memo(InfoIcon);
