import React from "react";
import classes from "./PlanetsTable.module.css";
import { planets } from "../../constants/constants";

const PlanetsTable = () => {
  return (
    <ul className={classes.table}>
      <li key="table-header">Planets</li>
      {planets.map((planet) => (
        <li key={`${planet.id}-${planet.name}`}>{planet.name}</li>
      ))}
    </ul>
  );
};

export default PlanetsTable;
