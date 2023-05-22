import { lazy } from "react";

const apps = [
  {
    id: "grassn",
    name: "GrassN",
    Component: lazy(() => import("appGrassn/Component")),
  },
  {
    id: "tankmix",
    name: "TankMix",
    Component: lazy(() => import("appTankmix/Component")),
  },
];

export default apps;
