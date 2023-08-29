// Solar System ThreeJS radius to km
// Radius of the sun: 140 = 696000km
// The numbers are approximately right
const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

export const planets = [
  {
    id: 0,
    name: "Mercury",
    size: 0.3,
    color: randomColor(),
    modelPath: "./mercury/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 2,
    dayLengthMultiplyFactor: 0.6,
  },
  {
    id: 1,
    name: "Venus",
    size: 0.09,
    color: randomColor(),
    modelPath: "./venus/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.8,
    dayLengthMultiplyFactor: 0.1,
  },
  {
    id: 2,
    name: "Earth",
    size: 0.07,
    color: randomColor(),
    modelPath: "./earth/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.6,
    dayLengthMultiplyFactor: 1.6,
  },
  {
    id: 3,
    name: "Mars",
    size: 5,
    color: randomColor(),
    modelPath: "./mars/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.4,
    dayLengthMultiplyFactor: 1.62,
  },
  {
    id: 4,
    name: "Jupiter",
    size: 1.4,
    color: randomColor(),
    modelPath: "./jupiter/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.2,
    dayLengthMultiplyFactor: 1.8,
  },
  {
    id: 5,
    name: "Saturn",
    size: 8.5,
    color: randomColor(),
    modelPath: "./saturn/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1,
    dayLengthMultiplyFactor: 1.77,
  },
  {
    id: 6,
    name: "Uranus",
    size: 0.06,
    color: randomColor(),
    modelPath: "./uranus/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 0.8,
    dayLengthMultiplyFactor: 1.71,
  },
  {
    id: 7,
    name: "Neptune",
    size: 0.55,
    color: randomColor(),
    modelPath: "./neptune/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 0.6,
    dayLengthMultiplyFactor: 1.73,
  },
  {
    id: 8,
    name: "Pluto",
    size: 0.0125,
    color: randomColor(),
    modelPath: "./pluto/scene.gltf",
    hasObliqueEcliptic: true,
    revolutionPeriodMultiplyFactor: 0.4,
    dayLengthMultiplyFactor: 1.4,
  },
];

export const asteroidBelts = [
  {
    ellipseStartPoint: 10.5,
    ellipseWidthFactor: 6,
  },
  {
    ellipseStartPoint: 0.3,
    ellipseWidthFactor: 0.5,
  },
];
