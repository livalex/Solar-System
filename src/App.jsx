import React, { useEffect, useState } from "react";
import Scene from "./components/canvas/scene/Scene";
import useDetectOrientation from "./components/hooks/detect-orientation";
import PlanetsTable from "./components/planetsTable/PlanetsTable";

function App() {
  const [clickedItem, setClickedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [initialRender, orientation] = useDetectOrientation();

  useEffect(() => {
    if (!initialRender) {
      window.location.reload(false);
    }
  }, [orientation]);

  return (
    <>
      <PlanetsTable
        clickedItem={clickedItem}
        setClickedItem={setClickedItem}
        setHoveredItem={setHoveredItem}
      />
      <Scene clickedItem={clickedItem} hoveredItem={hoveredItem} />
    </>
  );
}

export default App;
