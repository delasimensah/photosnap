import React from "react";
import Fade from "react-reveal/Fade";

const StoryCard = ({ children, left }) => {
  return (
    <Fade left={left}>
      <div className="stories-wrapper">{children}</div>
    </Fade>
  );
};

export default StoryCard;
