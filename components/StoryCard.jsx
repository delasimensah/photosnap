import React from "react";
import Fade from "react-reveal/Fade";

const StoryCard = ({ children, left }) => {
  return (
    <Fade distance="10px" left={left}>
      <div className="stories-wrapper">{children}</div>
    </Fade>
  );
};

export default StoryCard;
