import React from "react";
import { createPortal } from "react-dom";

const PortalHoc = ({ children }) => {
  const mountPoint = document.getElementById("portal-root");

  return createPortal(children, mountPoint);
};

export default React.memo(PortalHoc);
