import React from "react";

const Switch = ({ onChange }) => {
  return (
    <label className="relative inline-block h-34 w-60">
      <input type="checkbox" className="hidden w-0 h-0" onChange={onChange} />
      <span className="absolute top-0 bottom-0 left-0 right-0 rounded-full cursor-pointer bg-lightGrey slider"></span>
    </label>
  );
};

export default Switch;
