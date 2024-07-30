import React from "react";
import { AnimatePresence, motion as m } from "framer-motion";

const AnimationLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AnimatePresence mode="wait">
        <m.div className="wp-main-container-wrap" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 2, ease: "easeOut" }}>
          {children}
        </m.div>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default AnimationLayout;
