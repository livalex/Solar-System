import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Point } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import "./Background.css";

const Stars = (props) => {
  const spherePoints = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  
  return (
    // stride = Min distance between previous and current point
    <Points positions={spherePoints} stride={3} {...props}>
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

const Background = () => {
  return (
    <div className="background">
      <Canvas camera={{ position: [0, 0, 0.5] }} dpr={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default Background;
