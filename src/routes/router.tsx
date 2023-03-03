import { createRef, RefObject } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Barista from "routes/Barista";
import Layout from "routes/Layout";
import NotFound from "routes/NotFound";
import BrewQuestion from "routes/BrewQuestion";
import Results from "routes/Results";

type RouteType = RouteObject & {
  nodeRef: RefObject<HTMLDivElement>;
};

export const routes: RouteType[] = [
  {
    path: "/",
    // name: "Barista",
    element: <Barista />,
    nodeRef: createRef(),
  },
  {
    path: "/q2",
    // name: "BrewQuestion",
    element: <BrewQuestion />,
    nodeRef: createRef(),
  },
  {
    path: "/results",
    // name: "Results",
    element: <Results />,
    nodeRef: createRef(),
  },
  {
    path: "*",
    // name: "NotFound",
    element: <NotFound />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);

export default router;
