import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { xZoomOutLvl, yZoomOutLvl } from "../../config/constants";

const Planet = ({
  id,
  xRadius,
  zRadius,
  path,
  scale,
  hasObliqueEcliptic,
  revolutionPeriodMultiplyFactor,
  dayLengthMultiplyFactor,
  clickedItem,
  lerping,
}) => {
  const model = useGLTF(path);
  const primitiveRef = useRef();
  const controls = useThree((state) => state.controls);

  useFrame(({ clock, camera }, delta) => {
    if (clickedItem === undefined) {
      const t = clock.getElapsedTime();

      primitiveRef.current.rotation.y = t * dayLengthMultiplyFactor;

      // the sun stays in place
      if (xRadius !== -1 && zRadius !== -1) {
        primitiveRef.current.position.x =
          xRadius * Math.sin(t * revolutionPeriodMultiplyFactor);
        primitiveRef.current.position.z =
          zRadius * Math.cos(t * revolutionPeriodMultiplyFactor);
        if (hasObliqueEcliptic) {
          primitiveRef.current.position.y =
            (xRadius * Math.sin(t * revolutionPeriodMultiplyFactor)) / 4;
        }
      }
    } else if (clickedItem === id && lerping) {
      const { x, y, z } = primitiveRef.current.position;

      // NOTE: lerp is creating the animation effect (slown down effect)

      // change the target of the camera (direction of looking)
      controls.target.lerp(new THREE.Vector3(x, y, z), delta);

      // position the camera closer to the planet, but not in the center
      camera.position.lerp(
        new THREE.Vector3(x - xZoomOutLvl, y + yZoomOutLvl, z),
        delta
      );
    }
  });

  return <primitive ref={primitiveRef} object={model.scene} scale={scale} />;
};

export default React.memo(Planet);
