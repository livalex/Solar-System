import { useState, useEffect } from "react";

const useDetectOrientation = () => {
  const [initialRender, setInitialRender] = useState(true);
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    function handleOrientationChange(event) {
      const { matches, media } = event;
      if (matches) {
        setInitialRender(false);
        setOrientation(media);
      }
    }

    const mediaQueryPortrait = window.matchMedia("(orientation: portrait)");
    const mediaQueryLandscape = window.matchMedia("(orientation: landscape)");

    if (mediaQueryPortrait.matches) {
      setOrientation("portrait");
    } else if (mediaQueryLandscape.matches) {
      setOrientation("landscape");
    }

    mediaQueryPortrait.addListener(handleOrientationChange);
    mediaQueryLandscape.addListener(handleOrientationChange);

    return () => {
      mediaQueryPortrait.removeListener(handleOrientationChange);
      mediaQueryLandscape.removeListener(handleOrientationChange);
    };
  }, []);

  return [initialRender, orientation];
};

export default useDetectOrientation;
