import React, { useEffect, useState } from "react";
import Scene from "./components/canvas/scene/Scene";
import useDetectOrientation from "./components/hooks/detect-orientation";
import PlanetsTable from "./components/planetsTable/PlanetsTable";
import InfoIcon from "./components/infoIcon/InfoIcon";
import InfoModal from "./components/infoModal/InfoModal";
import PortalHoc from "./components/PortalHoc";
import Backdrop from "./components/backdrop/Backdrop";
import Title from "./components/title/Title";
import LinkedInProfileCard from "./components/linkedInProfileCard/LinkedInProfileCard";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  // porbleme pe info modal pe landscape
  // cand se deschide tabelul pe landscape nu incape in ecran
  // invarte centura de asteorizi
  // alte optimizari prin cod

  const [clickedItem, setClickedItem] = useState(undefined);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [lerping, setLerping] = useState(false);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [title, setTitle] = useState("Solar System");
  const [isLoadingBarVisible, setIsLoadingBarVisible] = useState(false);
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
      <Title title={title} />
      <LinkedInProfileCard className="scene-card" />
      <AboutPage
        isLoadingBarVisible={isLoadingBarVisible}
        setIsLoadingBarVisible={setIsLoadingBarVisible}
      />
      {isInfoClicked && (
        <PortalHoc>
          <Backdrop setIsInfoClicked={setIsInfoClicked} />
          <InfoModal setIsInfoClicked={setIsInfoClicked} />
        </PortalHoc>
      )}
      {isLoadingBarVisible && (
        <Scene
          clickedItem={clickedItem}
          hoveredItem={hoveredItem}
          lerping={lerping}
          setLerping={setLerping}
        />
      )}
    </>
  );
}

export default App;
