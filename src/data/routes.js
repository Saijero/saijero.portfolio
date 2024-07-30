import React from "react";
import PageHooks from "../hooks/PageHooks";
import Landing from "../pages/landing/Landing";
import ListOfPage from "../pages/sample/ListOfPage";
import Gustoso from "../pages/sample/content/Gustoso";

export const main_routes = [
  /****
   *
   * render main navigation
   * call main navigation links
   *
   ****/

  { render_main_route: false, path: "/sample-project", key: "sample", element: <ListOfPage /> },
  { render_main_route: false, path: "/saijero-details", key: "hooks", element: <PageHooks /> },
  { render_main_route: false, path: "/saijero-landing-page", key: "landing", element: <Landing /> },

  /****
   *
   * render project navigation
   * call project navigation links
   *
   ****/

  { render_main_route: true, path: "/gustoso", key: "sample1", element: <Gustoso /> },
];
