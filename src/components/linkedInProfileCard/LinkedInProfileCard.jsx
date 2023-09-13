import classes from "./LinkedInProfileCard.module.css";
import logo from "../../assets/linkedin.svg";

const LinkedInProfileCard = () => {
  return (
    <a
      className={classes["connect-button"]}
      href="https://www.linkedin.com/in/alexandru-livadaru/"
      target="_blank"
    >
      <img src={logo} alt="LinkedIn logo" className={classes.logo} />
      <span className={classes.message}>Let's Connect</span>
    </a>
  );
};

export default LinkedInProfileCard;
