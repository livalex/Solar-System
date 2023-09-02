import React, { useRef, useState } from "react";
import classes from "./PlanetsTable.module.css";
import {
  planetData,
  planets,
  variableToNameMap,
} from "../../constants/constants";
import "react-slidedown/lib/slidedown.css";
import { DropdownHoc } from "../DropdownHoc";

const PlanetsTable = () => {
  const [clickedItem, setClickedItem] = useState(null);

  const onClickHandle = (id) => {
    if (clickedItem === id) {
      setClickedItem(null);
    } else {
      setClickedItem(id);
    }
  };

  const plusIcon = <span className={classes["plus-icon"]}>+</span>;

  const minusIcon = <span className={classes["minus-icon"]}>-</span>;

  const chooseSign = (id) =>
    (clickedItem !== id && plusIcon) || (clickedItem === id && minusIcon);

  return (
    <ul className={classes.table}>
      <li key="table-header">Planets</li>
      {planets.map((planet) => (
        <React.Fragment key={`${planet.id}-${planet.name}`}>
          <li
            onClick={() => onClickHandle(planet.id)}
            className={clickedItem === planet.id ? classes.selected : ""}
          >
            {planet.name}
            {chooseSign(planet.id)}
          </li>
          <DropdownHoc open={clickedItem === planet.id}>
            <div className={classes.details}>
              <table>
                <tbody>
                  {planetData.map((data) => (
                    <tr key={`${planet.id}-${data}`}>
                      <td className={classes["table-data"]}>
                        {variableToNameMap[data]}
                      </td>
                      <td className={classes["table-data"]}>{planet[data]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DropdownHoc>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default PlanetsTable;
