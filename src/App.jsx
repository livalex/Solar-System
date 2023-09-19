import React, { useEffect, useReducer } from "react";
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
import {
  CHANGE_TITLE,
  CLICK_INFO,
  CLICK_ITEM,
  HOVER_ITEM,
  LERP_CAMERA,
  SHOW_BAR,
} from "./config/constants";

const defaultAppState = {
  clickedItem: undefined,
  hoveredItem: null,
  lerping: false,
  isInfoClicked: false,
  title: "Solar System",
  isLoadingBarVisible: false,
};

const appReducer = (state, action) => {
  if (action.type === CLICK_ITEM) {
    return {
      ...state,
      clickedItem: action.id,
    };
  }

  if (action.type === HOVER_ITEM) {
    return {
      ...state,
      hoveredItem: action.id,
    };
  }

  if (action.type === LERP_CAMERA) {
    return {
      ...state,
      lerping: action.isLerping,
    };
  }

  if (action.type === CLICK_INFO) {
    return {
      ...state,
      isInfoClicked: action.isInfoClicked,
    };
  }

  if (action.type === CHANGE_TITLE) {
    return {
      ...state,
      title: action.title,
    };
  }

  if (action.type === SHOW_BAR) {
    return {
      ...state,
      isLoadingBarVisible: action.isLoadingBarVisible,
    };
  }

  throw Error("Unknown action.");
};

function App() {
  const [appState, dispatchAppAction] = useReducer(appReducer, defaultAppState);
  const [initialRender, orientation] = useDetectOrientation();

  const setClickedItem = (id) => {
    dispatchAppAction({ type: CLICK_ITEM, id });
  };

  const setHoveredItem = (id) => {
    dispatchAppAction({ type: HOVER_ITEM, id });
  };

  const setLerping = (isLerping) => {
    dispatchAppAction({ type: LERP_CAMERA, isLerping });
  };

  const setIsInfoClicked = (isInfoClicked) => {
    dispatchAppAction({ type: CLICK_INFO, isInfoClicked });
  };

  const setTitle = (title) => {
    dispatchAppAction({ type: CHANGE_TITLE, title });
  };

  const setIsLoadingBarVisible = (isLoadingBarVisible) => {
    dispatchAppAction({ type: SHOW_BAR, isLoadingBarVisible });
  };

  useEffect(() => {
    if (!initialRender) {
      window.location.reload(false);
    }
  }, [orientation]);

  return (
    <>
      <PlanetsTable
        clickedItem={appState.clickedItem}
        setClickedItem={setClickedItem}
        setHoveredItem={setHoveredItem}
        setLerping={setLerping}
        setTitle={setTitle}
      />
      <InfoIcon setIsInfoClicked={setIsInfoClicked} />
      <Title title={appState.title} />
      <LinkedInProfileCard className="scene-card" />
      <AboutPage
        isLoadingBarVisible={appState.isLoadingBarVisible}
        setIsLoadingBarVisible={setIsLoadingBarVisible}
      />
      {appState.isInfoClicked && (
        <PortalHoc>
          <Backdrop setIsInfoClicked={setIsInfoClicked} />
          <InfoModal setIsInfoClicked={setIsInfoClicked} />
        </PortalHoc>
      )}
      {appState.isLoadingBarVisible && (
        <Scene
          clickedItem={appState.clickedItem}
          hoveredItem={appState.hoveredItem}
          lerping={appState.lerping}
          setLerping={setLerping}
        />
      )}
    </>
  );
}

export default App;
