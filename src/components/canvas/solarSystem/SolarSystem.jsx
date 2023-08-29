import React, { useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import planetData from "./PlanetData";
import "./SolarSystem.css";
import { asteroidBelts, planets } from "../../../constants/constants";
import Planet from "../Planet";
import AsteroidBelt from "../asteroidBelt/AsteroidBelt";

function Ecliptic({ xRadius = 1, zRadius = 1, hasObliqueEcliptic = false }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    const y = hasObliqueEcliptic ? x / 4 : 0;

    points.push(new THREE.Vector3(x, y, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      {/* <pointLight position={[0, 0, 0]} /> */}
    </>
  );
}

function PlanetModel({
  planet: {
    id,
    size,
    modelPath,
    hasObliqueEcliptic,
    revolutionPeriodMultiplyFactor,
    dayLengthMultiplyFactor,
  },
}) {
  const planetRef = React.useRef();

  // const xRadius = (id + 1) * 1.1 * 25;
  // const zRadius = (id + 1) * 1.1 * 24;
  const xRadius = (id + 1) * 31.5;
  const zRadius = (id + 1) * 30.5;

  // useFrame(({ clock }) => {
  //   const t = clock.getElapsedTime();
  //   const x = xRadius * Math.sin(t);
  //   const z = zRadius * Math.cos(t);
  //   planetRef.current.position.x = x;
  //   planetRef.current.position.z = z;
  // });

  return (
    <>
      {/* <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh> */}
      <Planet
        xRadius={xRadius}
        zRadius={zRadius}
        path={modelPath}
        scale={size}
        hasObliqueEcliptic={hasObliqueEcliptic}
        revolutionPeriodMultiplyFactor={revolutionPeriodMultiplyFactor}
        dayLengthMultiplyFactor={dayLengthMultiplyFactor}
      />
      <Ecliptic
        xRadius={xRadius}
        zRadius={zRadius}
        hasObliqueEcliptic={hasObliqueEcliptic}
      />
    </>
  );
}

function Sun() {
  return (
    // <mesh>
    //   <sphereGeometry args={[20, 32, 32]} />
    //   <meshStandardMaterial color="#E1DC59" />
    // </mesh>
    <Planet
      xRadius={-1}
      zRadius={-1}
      path="./sun/scene.gltf"
      scale={2.5}
      dayLengthMultiplyFactor={1.2}
    />
  );
}

export default function SolarSystem() {
  return (
    <>
      <Sun />
      {planets.map((planet) => (
        <PlanetModel planet={planet} key={planet.id} />
      ))}
      <AsteroidBelt
        ellipseStartPoint={asteroidBelts[0].ellipseStartPoint}
        ellipseWidthFactor={asteroidBelts[0].ellipseWidthFactor}
      />
      <AsteroidBelt
        ellipseStartPoint={asteroidBelts[1].ellipseStartPoint}
        ellipseWidthFactor={asteroidBelts[1].ellipseWidthFactor}
      />
      ;
      <Lights />
      <OrbitControls
      // enableZoom={false}
      />
      <Stars
        radius={220}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}
