import classes from "./Backdrop.module.css";

const Backdrop = ({ setIsInfoClicked }) => {
  return (
    <div className={classes.backdrop} onClick={() => setIsInfoClicked(false)} />
  );
};

export default Backdrop;
