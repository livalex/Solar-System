import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Planet = ({
  xRadius,
  zRadius,
  path,
  scale,
  hasObliqueEcliptic,
  revolutionPeriodMultiplyFactor,
  dayLengthMultiplyFactor,
}) => {
  const model = useGLTF(path);
  const primitiveRef = useRef();

  useFrame(({ clock }) => {
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
  });

  return <primitive ref={primitiveRef} object={model.scene} scale={scale} />;
};

export default Planet;
