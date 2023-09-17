import classes from "./LinkedInProfileCard.module.css";
import logo from "../../assets/linkedin.svg";

const LinkedInProfileCard = ({ scene = false }) => {
  const anchorClasses = scene
    ? `${classes["connect-button"]} ${classes.scene}`
    : classes["connect-button"];

  return (
    <a
      className={anchorClasses}
      href="https://www.linkedin.com/in/alexandru-livadaru/"
      target="_blank"
    >
      <img src={logo} alt="LinkedIn logo" className={classes.logo} />
      <span className={classes.message}>Let's Connect</span>
    </a>
  );
};

export default LinkedInProfileCard;
