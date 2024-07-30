import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { main_routes } from "./data/routes";
import { CustomLink } from "./components/CustomLink";
import { AnimatePresence } from 'framer-motion'
import { ClickCountProvider } from "./hooks/ClickCountProvider";
import AssetsLoader from "./hooks/AssetsLoader";

export default function App() {
  const location = useLocation();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  let htmlClass = 'saijero-page-landing';

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMouseX(clientX);
      setMouseY(clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.querySelector('html').classList.add(htmlClass);
  }, [htmlClass]);

  return (
    <React.Fragment>
      <div className="wp-main-wrap">
        <div className="wp-custom-add">
          <div className="wp-child-wrap default-cursor"
            style={{
              left: mouseX - 9,
              top: mouseY - 10,
              position: 'fixed',
            }}
          >
            <CustomLink />
          </div>
        </div>
        <div className="wp-content-wrap">
          <AssetsLoader>
            <ClickCountProvider>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  {main_routes.map((route) => (
                    <Route
                      key={route.key}
                      path={route.path}
                      element={route.element} />
                  ))}
                </Routes>
              </AnimatePresence>
            </ClickCountProvider>
          </AssetsLoader>
        </div>
      </div>
    </React.Fragment >
  );
}
