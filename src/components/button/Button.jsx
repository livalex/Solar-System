import classes from "./Button.module.css";

const Button = ({ className, onClick, text }) => {
  return (
    <button className={`${classes["button"]} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
