import React from "react";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

export function DropdownHoc(props) {
  return (
    <SlideDown className={"my-dropdown-slidedown"}>
      {props.open ? props.children : null}
    </SlideDown>
  );
}
