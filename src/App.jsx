import React, { useEffect, useState } from "react";
import Scene from "./components/canvas/scene/Scene";
import useDetectOrientation from "./components/hooks/detect-orientation";
import PlanetsTable from "./components/planetsTable/PlanetsTable";
import InfoIcon from "./components/infoIcon/InfoIcon";
import InfoModal from "./components/infoModal/InfoModal";
import PortalHoc from "./components/PortalHoc";
import Backdrop from "./components/backdrop/Backdrop";
import FadeBackdrop from "./components/fadeBackdrop/FadeBackdrop";
import Title from "./components/title/Title";
import Fade from "@material-ui/core/Fade";

function App() {
  const [clickedItem, setClickedItem] = useState(undefined);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [lerping, setLerping] = useState(false);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [title, setTitle] = useState("Solar System");
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
        setLerping={setLerping}
        setTitle={setTitle}
      />
      <InfoIcon setIsInfoClicked={setIsInfoClicked} />
      <FadeBackdrop />
      <Title title={title} />
      {isInfoClicked && (
        <PortalHoc>
          <Backdrop setIsInfoClicked={setIsInfoClicked} />
          <InfoModal setIsInfoClicked={setIsInfoClicked} />
        </PortalHoc>
      )}
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
