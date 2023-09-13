import React from "react";
import { Html, useProgress } from "@react-three/drei";
import classes from "./CanvasLoader.module.css";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* <span className={classes["canvas-loader"]}></span> */}
      <p
        // style={{
        //   fontSize: 14,
        //   color: "#f1f1f1",
        //   fontWeight: 800,
        //   marginTop: 40,
        // }}
        className={classes["canvas-loader"]}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
