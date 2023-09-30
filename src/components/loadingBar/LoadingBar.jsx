import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Stack } from "@mui/material";
import classes from "./LoadingBar.module.css";
import TypeIt from "typeit-react";

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

const LoadingBar = ({ progress }) => {
  return (
    <>
      {/* <ProgressBar progress={progress} /> */}
      <div className={classes["loading-text"]}>
        <TypeIt
          options={{
            strings: ["Loading the scene..."],
            speed: 15,
          }}
        />
      </div>
    </>
  );
};

export default React.memo(LoadingBar);
