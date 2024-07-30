import React, { useEffect, useRef, useState } from "react";
import { CustomLink } from "../components/CustomLink";
import { nav_home_page } from "../data/home_navigation";
import Home from "../pages/home/Home";
import AboutMe from "../pages/about/AboutMe";
import OtherInfo from "../pages/other/OtherInfo";
import ListOfPage from "../pages/sample/ListOfPage";
import { motion as m } from "framer-motion";
import { useClickCount } from "./ClickCountProvider";

const PageHooks = () => {
  const [visibleName, setVisibleName] = useState("Home");
  const [activeLink, setActiveLink] = useState("home");
  const [onClickToggle, setOnClickToggle] = useState(<Home />);
  const [showSideBar, setShowSideBar] = useState(true);

  const menuRef = useRef();

  const { incrementHomeClickCount } = useClickCount();

  function onClickNavigate(path) {
    switch (path) {
      case "home":
        setActiveLink(path);
        setVisibleName("Home");
        incrementHomeClickCount();
        setOnClickToggle(<Home />);
        break;
      case "about-me":
        setActiveLink(path);
        setVisibleName("About Me");
        setOnClickToggle(<AboutMe />);
        break;
      case "other-info":
        setActiveLink(path);
        setVisibleName("Blog post");
        setOnClickToggle(<OtherInfo />);
        break;
      case "list-of-projects":
        setActiveLink(path);
        setVisibleName("Projects");
        setOnClickToggle(<ListOfPage />);
        break;
      case "CV-download":
        const anchor = document.createElement("a");
        anchor.href = "http://horizonplayersclub.com/wp-content/uploads/2023/12/CV_QUIZAM.docx";
        anchor.download = "CV_QUIZAM.docx";
        anchor.click();
        break;
      default:
        setOnClickToggle(null);
    }
  }

  function handleShowBar() {
    setShowSideBar(!showSideBar);
  }

  useEffect(() => {
    const subject_area = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowSideBar(false);
      }
    };
    document.addEventListener("mousedown", subject_area);
    document.addEventListener("scroll", subject_area);
    return () => {
      document.removeEventListener("mousedown", subject_area);
      document.addEventListener("scroll", subject_area);
    };
  }, [showSideBar]);

  useEffect(() => {
    const htmlElement = document.querySelector("body");
    htmlElement.classList.add("transition");
    setTimeout(() => {
      htmlElement.classList.replace("transition", "home-background");
    }, 0);
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector(".wp-child-wrap");
    htmlElement.classList.add("default-cursor");
  });

  return (
    <React.Fragment>
      <m.div id="wp-saijero-details" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}>
        <div className="wp-main-wrap">
          <div className="wp-navigation-wrap">
            <m.div className="wp-wrap-side-bar" ref={menuRef} exit={{ opacity: 0, x: showSideBar ? "0%" : "" }} animate={{ opacity: 1, x: showSideBar ? "0%" : "-90%" }} initial={{ opacity: 0, x: "-100%" }} transition={{ duration: 0.75, ease: "easeOut" }}>
              <div className="wp-sub-wrap">
                <div className="wp-saijero-logo">
                  <CustomLink to={"/saijero-landing-page"}>
                    <img src="http://horizonplayersclub.com/wp-content/uploads/2023/04/saijero-logo.png" alt="logo" />
                  </CustomLink>
                  <div className="wp-visited">
                    <small className="visited">You visit</small>
                    <small className="visited">{visibleName && visibleName}</small>
                  </div>
                </div>
                <div className="wp-nav-bar">
                  <ul className="wp-list-item">
                    {nav_home_page.map(({ path, name, icons }, index) => (
                      <li className="wp-list-link" key={index}>
                        <CustomLink className={activeLink === path ? "active" : "select"} onClick={() => onClickNavigate(path)} to={""}>
                          <div className="wp-wrap-selection">
                            {name}
                            {icons}
                          </div>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="wp-show-bar">
                <div className="wp-button-wrap">
                  <CustomLink
                    className={`wp-button-bar ${showSideBar ? "active" : "non-active"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowBar();
                    }}
                  >
                    {showSideBar ? "Hide" : "Show"}
                  </CustomLink>
                </div>
              </div>
            </m.div>
          </div>
          {onClickToggle && (
            <m.div className={`wp-toggle-page`} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ transition: 2, ease: "easeOut" }}>
              <div children className="wp-content-wrap">
                {onClickToggle}
              </div>
            </m.div>
          )}
        </div>
      </m.div>
    </React.Fragment>
  );
};

export default PageHooks;
