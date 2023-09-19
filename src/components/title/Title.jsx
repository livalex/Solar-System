import React from "react";
import classes from "./Title.module.css";

const Title = ({ title }) => <div className={classes.title}>{title}</div>;

export default React.memo(Title);
