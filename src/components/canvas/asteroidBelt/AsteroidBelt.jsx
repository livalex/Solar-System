import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Point } from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";
// import "./AsteroidBelt.css";

const Stars = (props) => {
  // const spherePoints = random.inSphere(new Float32Array(5000), { radius: 1.2 });
  // console.log(spherePoints);
  const points = [];
  for (let i = 0; i < 5000; i++) {
    const angle = Math.random() * Math.PI * 2;
    const rho = Math.random() + 10.5;
    let x = Math.sqrt(rho) * Math.cos(angle);
    let y = Math.sqrt(rho) * Math.sin(angle);
    x = (x * ((9 + 1) * 25)) / 6;
    y = (y * ((9 + 1) * 24)) / 6;
    points.push(x, 0, y);
  }
  console.log(points);
  return (
    // stride = Min distance between previous and current point
    <Points positions={new Float32Array(points)} stride={3} {...props}>
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

const AsteroidBelt = (props) => {
  return (
    // <div className="background">
    //   <Canvas
    //     shadows
    //     camera={{ position: [0, 0, 0.5] }}
    //     dpr={window.devicePixelRatio}
    //     gl={{ preserveDrawingBuffer: true }}
    //   >
    //     <Suspense fallback={null}>
    //       <Stars />
    //       {props.children}
    //     </Suspense>
    //     <Preload all />
    //   </Canvas>
    // </div>
    <Stars />
  );
};

export default AsteroidBelt;
