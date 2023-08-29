export let eclipticLength = 31.5;
export let eclipticWidth = 30.5;

export let cameraPos = [0, 100, 530];

export let sunScale = 2.5;

export let planets = [
  {
    id: 0,
    name: "Mercury",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.3 : 0.1,
    modelPath: "./mercury/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 2,
    dayLengthMultiplyFactor: 0.6,
  },
  {
    id: 1,
    name: "Venus",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.09 : 0.02,
    modelPath: "./venus/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.8,
    dayLengthMultiplyFactor: 0.1,
  },
  {
    id: 2,
    name: "Earth",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.07 : 0.015,
    modelPath: "./earth/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.6,
    dayLengthMultiplyFactor: 1.6,
  },
  {
    id: 3,
    name: "Mars",
    size: window.matchMedia("(min-width: 640px)").matches ? 5 : 1.6,
    modelPath: "./mars/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.4,
    dayLengthMultiplyFactor: 1.62,
  },
  {
    id: 4,
    name: "Jupiter",
    size: window.matchMedia("(min-width: 640px)").matches ? 1.4 : 0.5,
    modelPath: "./jupiter/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.2,
    dayLengthMultiplyFactor: 1.8,
  },
  {
    id: 5,
    name: "Saturn",
    size: window.matchMedia("(min-width: 640px)").matches ? 8.5 : 2.8,
    modelPath: "./saturn/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1,
    dayLengthMultiplyFactor: 1.77,
  },
  {
    id: 6,
    name: "Uranus",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.06 : 0.02,
    modelPath: "./uranus/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 0.8,
    dayLengthMultiplyFactor: 1.71,
  },
  {
    id: 7,
    name: "Neptune",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.55 : 0.15,
    modelPath: "./neptune/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 0.6,
    dayLengthMultiplyFactor: 1.73,
  },
  {
    id: 8,
    name: "Pluto",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.0125 : 0.005,
    modelPath: "./pluto/scene.gltf",
    hasObliqueEcliptic: true,
    revolutionPeriodMultiplyFactor: 0.4,
    dayLengthMultiplyFactor: 1.4,
  },
];

export let asteroidBelts = [
  {
    ellipseStartPoint: 10.5,
    ellipseWidthFactor: 6,
  },
  {
    ellipseStartPoint: 0.3,
    ellipseWidthFactor: 0.5,
  },
];

if (!window.matchMedia("(min-width: 640px)").matches) {
  eclipticLength = 10.5;
  eclipticWidth = 9.5;

  cameraPos = [0, 100, 500];

  asteroidBelts = [
    {
      ellipseStartPoint: 7.6,
      ellipseWidthFactor: 16,
    },
    {
      ellipseStartPoint: 0.05,
      ellipseWidthFactor: 0.5,
    },
  ];

  sunScale = 0.8;
}
