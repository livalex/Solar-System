import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import FadeBackdrop from "../fadeBackdrop/FadeBackdrop";
import LinkedInProfileCard from "../linkedInProfileCard/LinkedInProfileCard";
import { deleteText } from "../utils/backspace";
import Button from "../button/Button";

import classes from "./AboutPage.module.css";
import LoadingBar from "../loadingBar/LoadingBar";

const AboutPage = ({ isLoadingBarVisible, setIsLoadingBarVisible }) => {
  const { progress } = useProgress();
  const [containerClasses, setContainerClasses] = useState(classes.container);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const [isFadeOutTrue, setIsFadeOutTrue] = useState(false);
  const paragraphs = ["recommendation", "technologies", "solarSystem"];

  const clickHandler = () => {
    setIsFadeOutTrue(true);
    paragraphs.forEach((p) => deleteText(p));
    setTimeout(() => {
      setIsLoadingBarVisible(true);
    }, "1500");
  };

  useEffect(() => {
    if (progress >= 100) {
      setContainerClasses(
        `${classes.container} ${classes["page-fade-effect"]}`
      );
      setIsBackdropVisible(true);
    }
  }, [progress]);

  return (
    <>
      <div className={containerClasses}>
        <section>
          <div className={classes["intro-heading"]}>
            <h1>our solar system</h1>
          </div>
          <div className={classes.info}>
            <p className={classes.paragraph} id="solarSystem">
              A solar system encompasses a star and its accompanying celestial
              bodies that revolve around it. Ours, for instance, comprises the
              sun, eight planets (along with their moons), dwarf planets,
              asteroids, and comets. Situated within the Orion Arm of the Milky
              Way Galaxy, our solar system is positioned approximately 27,000
              light-years distant from the center of the Milky Way Galaxy.
            </p>
            <p className={classes.paragraph} id="technologies">
              This project leverages{" "}
              <span className={classes.technology}>Three.js</span>,{" "}
              <span className={classes.technology}>React Three Fiber</span>, and{" "}
              <span className={classes.technology}>React Drei</span> as its
              driving technologies. The current scene displays the sun, all
              eight planets (or nine, if you classify Pluto as a planet), the
              asteroid belt, and an array of thousands of stars.
            </p>
            <p className={classes.paragraph} id="recommendation">
              To enhance your viewing enjoyment, we recommend using a laptop or
              desktop computer equipped with the most up-to-date versions of
              either Google Chrome or Safari Technology Preview.
            </p>
          </div>

          <div className={classes.card}>
            <LinkedInProfileCard
              className={isFadeOutTrue && classes["fade-out"]}
            />
          </div>
          <div className={classes.button}>
            <Button
              onClick={clickHandler}
              className={isFadeOutTrue && classes["fade-out"]}
              text="View Scene"
            />
          </div>
        </section>
        {isLoadingBarVisible && <LoadingBar progress={progress} />}
      </div>
      {isBackdropVisible && <FadeBackdrop />}
    </>
  );
};

export default React.memo(AboutPage);
