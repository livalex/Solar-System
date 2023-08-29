import React, { useEffect } from "react";
import Scene from "./components/canvas/scene/Scene";
import useDetectOrientation from "./components/hooks/detect-orientation";

function App() {
  const [initialRender, orientation] = useDetectOrientation();

  useEffect(() => {
    if (!initialRender) {
      window.location.reload(false);
    }
  }, [orientation]);

  return <Scene />;
}

export default App;
