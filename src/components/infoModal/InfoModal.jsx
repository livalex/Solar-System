import { galaxyData } from "../../config/constants";
import Button from "../button/Button";
import classes from "./InfoModal.module.css";

const InfoModal = ({ setIsInfoClicked }) => {
  return (
    <div className={classes.container}>
      <section>
        <h1 className={classes["section-head"]}>Galaxy Info</h1>
        <table cellSpacing="0" cellPadding="0" className={classes.data}>
          <tbody>
            {galaxyData.map((data) => (
              <tr key={data[0]}>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h1 className={classes["section-head"]}>Controls</h1>
        <p className={classes.data}>
          Press left click + drag, or swipe to move the camera direction. To pan
          the camera, right click + drag. For zooming, use a scroll motion or
          pinch your fingers together / outward. When observing a planet, you
          have the ability to navigate around it by performing a left-click and
          drag gesture, or a swipe.
        </p>
      </section>
      <Button
        className={classes["close-button"]}
        onClick={() => setIsInfoClicked(false)}
        text="Close"
      />
    </div>
  );
};

export default InfoModal;
