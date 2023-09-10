import React, { useState } from "react";
import classes from "./PlanetsTable.module.css";
import { planetData, planets, variableToNameMap } from "../../config/constants";
import "react-slidedown/lib/slidedown.css";
import { DropdownHoc } from "../DropdownHoc";
import ToggleIcon from "../toggle/ToggleIcon";

const PlanetsTable = ({
  clickedItem,
  setClickedItem,
  setHoveredItem,
  setLerping,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const clickHandler = (id) => {
    if (clickedItem === id) {
      setClickedItem(null);
    } else {
      setClickedItem(id);
      setLerping(true);
    }
  };

  const plusIcon = <span className={classes["plus-icon"]}>+</span>;

  const minusIcon = <span className={classes["minus-icon"]}>-</span>;

  const chooseSign = (id) =>
    (clickedItem !== id && plusIcon) || (clickedItem === id && minusIcon);

  const tableClassName = isToggled
    ? `${classes.table} ${classes["opened-table"]}`
    : classes.table;

  return (
    <>
      <ToggleIcon isToggled={isToggled} setIsToggled={setIsToggled} />
      <ul className={tableClassName}>
        <li key="table-header">Planets</li>
        {planets.map((planet) => (
          <React.Fragment key={`${planet.id}-${planet.name}`}>
            <li
              onClick={() => clickHandler(planet.id)}
              onMouseEnter={() => setHoveredItem(planet.id)}
              onMouseLeave={() => setHoveredItem(null)}
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
                        <td className={classes["table-data"]}>
                          {planet[data]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DropdownHoc>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default PlanetsTable;
