import React, { useState } from "react";
import classes from "./ToggleIcon.module.css";
import close from "../../assets/menu.svg";
import menu from "../../assets/close.svg";

const ToggleIcon = ({ isToggled, setIsToggled }) => {
  const clickHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <img
        src={isToggled ? menu : close}
        alt="menu"
        className={classes.icon}
        onClick={clickHandler}
      />
    </div>
  );
};

export default ToggleIcon;
