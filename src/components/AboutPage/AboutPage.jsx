import React, { useEffect, useState } from "react";
import classes from "./AboutPage.module.css";
import { useProgress } from "@react-three/drei";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Stack } from "@mui/material";
import FadeBackdrop from "../fadeBackdrop/FadeBackdrop";
import LinkedInProfileCard from "../linkedInProfileCard/LinkedInProfileCard";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  width: window.matchMedia("(min-width: 640px)").matches ? 500 : 350,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ProgressBar = ({ progress }) => {
  return (
    <Stack alignItems="center">
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={progress} />
      </Box>
    </Stack>
  );
};

const AboutPage = ({ isLoadingBarVisible, setIsLoadingBarVisible }) => {
  const { progress } = useProgress();
  const [containerClasses, setContainerClasses] = useState(classes.container);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setContainerClasses(`${classes.container} ${classes["fade-effect"]}`);
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
            <p>
              A solar system encompasses a star and its accompanying celestial
              bodies that revolve around it. Ours, for instance, comprises the
              sun, eight planets (along with their moons), dwarf planets,
              asteroids, and comets. Situated within the Orion Arm of the Milky
              Way Galaxy, our solar system is positioned approximately 27,000
              light-years distant from the center of the Milky Way Galaxy.
            </p>
            <p>
              This project leverages Three.js, React Three Fiber, and React Drei
              as its driving technologies. The current scene displays the sun,
              all eight planets (or nine, if you classify Pluto as a planet),
              the asteroid belt, and an array of thousands of stars.
            </p>
            <p>
              To enhance your viewing enjoyment, we recommend using a laptop or
              desktop computer equipped with the most up-to-date versions of
              either Google Chrome or Safari Technology Preview.
            </p>
          </div>
        </section>
        <div className={classes.card}>
          <LinkedInProfileCard />
        </div>
        <div className={classes.button}>
          <button
            className={classes["close-button"]}
            onClick={() => setIsLoadingBarVisible(true)}
          >
            View Scene
          </button>
        </div>
        {isLoadingBarVisible && (
          <>
            <div className={classes["loading-text"]}>Loading the scene...</div>
            <ProgressBar progress={progress} />
          </>
        )}
      </div>
      {isBackdropVisible && <FadeBackdrop />}
    </>
  );
};

export default AboutPage;
