import React, { useEffect, useState } from "react";
import Scene from "./components/canvas/scene/Scene";
import useDetectOrientation from "./components/hooks/detect-orientation";
import PlanetsTable from "./components/planetsTable/PlanetsTable";

function App() {
  const [clickedItem, setClickedItem] = useState(undefined);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [initialRender, orientation] = useDetectOrientation();
  const [lerping, setLerping] = useState(false);

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
        setLerping={setLerping}
      />
      <Scene
        clickedItem={clickedItem}
        hoveredItem={hoveredItem}
        lerping={lerping}
        setLerping={setLerping}
      />
    </>
  );
}

export default App;
