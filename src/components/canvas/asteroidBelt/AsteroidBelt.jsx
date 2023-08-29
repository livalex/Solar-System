import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Point } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";

const AsteroidBelt = ({ ellipseStartPoint, ellipseWidthFactor }) => {
  const points = [];

  for (let i = 0; i < 5000; i++) {
    const angle = Math.random() * Math.PI * 2;
    const rho = Math.random() + ellipseStartPoint;

    let x = Math.sqrt(rho) * Math.cos(angle);
    let y = Math.sqrt(rho) * Math.sin(angle);

    x = (x * 250) / ellipseWidthFactor;
    y = (y * 240) / ellipseWidthFactor;

    points.push(x, 0, y);
  }

  return (
    // stride = Min distance between previous and current point
    <Points positions={new Float32Array(points)} stride={3}>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default AsteroidBelt;
