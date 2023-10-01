// computer

export let xZoomOutLvl = -40;
export let yZoomOutLvl = 5;

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
    diameter: "4,879 km",
    semiMajorAxis: "57,900,000 km",
    lengthOfTheDay: "4222.6 hrs",
    orbitalPeriod: "88 days",
    orbitInclination: "7°",
    surfaceTemp: "700 K",
  },
  {
    id: 1,
    name: "Venus",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.09 : 0.02,
    modelPath: "./venus/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.8,
    dayLengthMultiplyFactor: 0.1,
    diameter: "12,104 km",
    semiMajorAxis: "108,200,000 km",
    lengthOfTheDay: "2802 hrs",
    orbitalPeriod: "224.7 days",
    orbitInclination: "3.4°",
    surfaceTemp: "735 K",
  },
  {
    id: 2,
    name: "Earth",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.07 : 0.015,
    modelPath: "./earth/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.6,
    dayLengthMultiplyFactor: 1.6,
    diameter: "12,756 km",
    semiMajorAxis: "149,600,000 km",
    lengthOfTheDay: "24 hrs",
    orbitalPeriod: "365.2 days",
    orbitInclination: "0°",
    surfaceTemp: "288 K",
  },
  {
    id: 3,
    name: "Mars",
    size: window.matchMedia("(min-width: 640px)").matches ? 5 : 1.6,
    modelPath: "./mars/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.4,
    dayLengthMultiplyFactor: 1.62,
    diameter: "6,792 km",
    semiMajorAxis: "227,900,000 km",
    lengthOfTheDay: "24.7 hrs",
    orbitalPeriod: "687 days",
    orbitInclination: "1.85°",
    surfaceTemp: "210 K",
  },
  {
    id: 4,
    name: "Jupiter",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.08 : 0.027,
    modelPath: "./jupiter/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1.2,
    dayLengthMultiplyFactor: 1.8,
    diameter: "142,984 km",
    semiMajorAxis: "778,600,000 km",
    lengthOfTheDay: "9.9 hrs",
    orbitalPeriod: "4331 days",
    orbitInclination: "1.303°",
    surfaceTemp: "125 K",
  },
  {
    id: 5,
    name: "Saturn",
    size: window.matchMedia("(min-width: 640px)").matches ? 8.5 : 2.8,
    modelPath: "./saturn/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 1,
    dayLengthMultiplyFactor: 1.77,
    diameter: "120,536 km",
    semiMajorAxis: "1,433,500,000 km",
    lengthOfTheDay: "10.7 hrs",
    orbitalPeriod: "10747 days",
    orbitInclination: "2.48524°",
    surfaceTemp: "95 K",
  },
  {
    id: 6,
    name: "Uranus",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.06 : 0.02,
    modelPath: "./uranus/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 0.8,
    dayLengthMultiplyFactor: 1.71,
    diameter: "51,118 km",
    semiMajorAxis: "2,872,500,000 km",
    lengthOfTheDay: "17.2 hrs",
    orbitalPeriod: "30589 days",
    orbitInclination: "0.8°",
    surfaceTemp: "57 K",
  },
  {
    id: 7,
    name: "Neptune",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.55 : 0.15,
    modelPath: "./neptune/scene.gltf",
    hasObliqueEcliptic: false,
    revolutionPeriodMultiplyFactor: 0.6,
    dayLengthMultiplyFactor: 1.73,
    diameter: "49,528 km",
    semiMajorAxis: "4,495,100,000 km",
    lengthOfTheDay: "16.1 hrs",
    orbitalPeriod: "59800 days",
    orbitInclination: "1.8°",
    surfaceTemp: "59 K",
  },
  {
    id: 8,
    name: "Pluto",
    size: window.matchMedia("(min-width: 640px)").matches ? 0.0125 : 0.005,
    modelPath: "./pluto/scene.gltf",
    hasObliqueEcliptic: true,
    revolutionPeriodMultiplyFactor: 0.4,
    dayLengthMultiplyFactor: 1.4,
    diameter: "2,374 km",
    semiMajorAxis: "5,874,000,000 km",
    lengthOfTheDay: "6.39 hrs",
    orbitalPeriod: "90570 days",
    orbitInclination: "17.2°",
    surfaceTemp: "45 K",
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

// phone
if (!window.matchMedia("(min-width: 640px)").matches) {
  xZoomOutLvl = -30;
  yZoomOutLvl = 5;

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

export const variableToNameMap = {
  diameter: "Diameter",
  semiMajorAxis: "Semi-major Axis",
  lengthOfTheDay: "Length Of Day",
  orbitalPeriod: "Orbital Period",
  orbitInclination: "Orbit Inclination",
  surfaceTemp: "Surface Temp",
};

export const planetData = [
  "diameter",
  "semiMajorAxis",
  "lengthOfTheDay",
  "orbitalPeriod",
  "orbitInclination",
  "surfaceTemp",
];

export const galaxyData = [
  ["Galaxy type", "Barred spiral"],
  ["Age", "13.6 billion years (and counting)"],
  ["Size", "100,000 light-years across"],
  ["Number of stars", "about 200 billion"],
  ["Rotation time", "250 million years"],
];

// action types
export const CLICK_ITEM = "CLICK_ITEM";
export const HOVER_ITEM = "HOVER_ITEM";
export const LERP_CAMERA = "LERP_CAMERA";
export const CLICK_INFO = "CLICK_INFO";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const SHOW_BAR = "SHOW_BAR";
