import React, { useEffect } from "react";
import { cameraPos } from "../../../config/constants";
import SolarSystem from "../solarSystem/SolarSystem";
import classes from "./Scene.module.css";
import useDetectOrientation from "../../hooks/detect-orientation";
import { Canvas } from "@react-three/fiber";

const Scene = ({ clickedItem, hoveredItem, lerping, setLerping, setTitle }) => {
  const [initialRender, orientation] = useDetectOrientation();

  useEffect(() => {
    if (!initialRender) {
      window.location.reload(false);
    }
  }, [orientation]);

  return (
    <div className={classes.background}>
      <Canvas
        camera={{ position: cameraPos, fov: 45 }}
        // if enabled will stop the planets from moving after one second or so
        // if we click the screen they will star spinning again and so on
        // frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
      >
        <SolarSystem
          clickedItem={clickedItem}
          hoveredItem={hoveredItem}
          lerping={lerping}
          setTitle={setTitle}
        />
      </Canvas>
    </div>
  );
};

export default React.memo(Scene);
