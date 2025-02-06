import React from "react";
import PropTypes from "prop-types";

const ColorBox = ({ color }) => {
  return (
    <div
      data-testid="colorBox"
      className="color-box"
      style={{ backgroundColor: color }}
    ></div>
  );
};

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorBox;
