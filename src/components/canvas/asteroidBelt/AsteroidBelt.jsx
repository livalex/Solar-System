import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const AsteroidBelt = ({
  id,
  clickedItem,
  ellipseStartPoint,
  ellipseWidthFactor,
}) => {
  const points = [];
  const ref = useRef();

  for (let i = 0; i < 5000; i++) {
    const angle = Math.random() * Math.PI * 2;
    const rho = Math.random() + ellipseStartPoint;

    let x = Math.sqrt(rho) * Math.cos(angle);
    let y = Math.sqrt(rho) * Math.sin(angle);

    x = (x * 250) / ellipseWidthFactor;
    y = (y * 240) / ellipseWidthFactor;

    points.push(x, 0, y);
  }

  useFrame(({ clock }, delta) => {
    if (clickedItem === undefined) {
      // do not delete clock
      ref.current.rotation.y += id ? delta / 100 : delta + 0.002;
    }
  });

  return (
    // stride = Min distance between previous and current point
    // group is used in the useFrame to rotate the points
    <group>
      <Points ref={ref} positions={new Float32Array(points)} stride={3}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default React.memo(AsteroidBelt);
