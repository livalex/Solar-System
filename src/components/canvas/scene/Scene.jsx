import { cameraPos } from "../../../config/constants";
import SolarSystem from "../solarSystem/SolarSystem";
import classes from "./Scene.module.css";
import { Canvas } from "@react-three/fiber";

const Scene = ({ clickedItem, hoveredItem }) => {
  return (
    <div className={classes.background}>
      <Canvas
        camera={{ position: cameraPos, fov: 45 }}
        // if enabled will stop the planets from moving after one second or so
        // if we click the screen they will star spinning again and so on
        // frameloop="demand"
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        <SolarSystem clickedItem={clickedItem} hoveredItem={hoveredItem} />
      </Canvas>
    </div>
  );
};

export default Scene;
