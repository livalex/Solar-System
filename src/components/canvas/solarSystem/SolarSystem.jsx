import React from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import {
  asteroidBelts,
  eclipticLength,
  eclipticWidth,
  planets,
  sunScale,
} from "../../../config/constants";
import Planet from "../Planet";
import AsteroidBelt from "../asteroidBelt/AsteroidBelt";

function Ecliptic({
  xRadius = 1,
  zRadius = 1,
  hasObliqueEcliptic = false,
  clickedItem,
  hoveredItem,
  id,
}) {
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

  let color = "#BFBBDA";

  if ((hoveredItem === id && clickedItem === id) || clickedItem === id) {
    color = "#800080";
  } else if (hoveredItem === id) {
    color = "#ffbd00";
  }

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color={color} />
    </line>
  );
}

function Lights() {
  return <ambientLight />;
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
  clickedItem,
  hoveredItem,
}) {
  const planetRef = React.useRef();
  const xRadius = (id + 1) * eclipticLength;
  const zRadius = (id + 1) * eclipticWidth;

  return (
    <>
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
        clickedItem={clickedItem}
        hoveredItem={hoveredItem}
        id={id}
      />
    </>
  );
}

function Sun() {
  return (
    <Planet
      xRadius={-1}
      zRadius={-1}
      path="./sun/scene.gltf"
      scale={sunScale}
      dayLengthMultiplyFactor={1.2}
    />
  );
}

export default function SolarSystem({ clickedItem, hoveredItem }) {
  const [asteroidBelt, outerSpace] = asteroidBelts;

  return (
    <>
      <Sun />
      {planets.map((planet) => (
        <PlanetModel
          planet={planet}
          key={planet.id}
          clickedItem={clickedItem}
          hoveredItem={hoveredItem}
        />
      ))}
      <AsteroidBelt
        ellipseStartPoint={asteroidBelt.ellipseStartPoint}
        ellipseWidthFactor={asteroidBelt.ellipseWidthFactor}
      />
      <AsteroidBelt
        ellipseStartPoint={outerSpace.ellipseStartPoint}
        ellipseWidthFactor={outerSpace.ellipseWidthFactor}
      />
      ;
      <Lights />
      <OrbitControls />
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
