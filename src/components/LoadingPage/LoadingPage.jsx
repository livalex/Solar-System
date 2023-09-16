import React, { useEffect, useState } from "react";
import classes from "./LoadingPage.module.css";
import { useProgress } from "@react-three/drei";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Stack } from "@mui/material";
import FadeBackdrop from "../fadeBackdrop/FadeBackdrop";

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

const LoadingPage = () => {
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
        <div className={classes["intro-heading"]}>
          <h1>our solar system</h1>
        </div>
        <div className={classes["loading-text"]}>Loading the scene...</div>
        <ProgressBar progress={progress} />
      </div>
      {isBackdropVisible && <FadeBackdrop />}
    </>
  );
};

export default LoadingPage;
