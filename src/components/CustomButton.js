import React, { useEffect } from "react";

export function CustomButton({ id, onClick, children, className, onChange }) {
  useEffect(() => {
    const htmlElement = document.querySelector(".wp-child-wrap");
    if (htmlElement) {
      htmlElement.classList.add("default-cursor");
    }

    return () => {
      if (htmlElement) {
        htmlElement.classList.remove("new-cursor");
      }
    };
  }, []);

  const handleMouseEnter = () => {
    const htmlElement = document.querySelector(".wp-child-wrap");
    if (htmlElement) {
      htmlElement.classList.replace("default-cursor", "new-cursor");
    }
  };

  const handleMouseLeave = () => {
    const htmlElement = document.querySelector(".wp-child-wrap");
    if (htmlElement) {
      htmlElement.classList.replace("new-cursor", "default-cursor");
    }
  };

  return (
    <React.Fragment>
      <button id={id} onChange={onChange} className={className} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </button>
    </React.Fragment>
  );
}
