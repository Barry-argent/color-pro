import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorOptions = ({ targetColor, onGuess }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateNewColors();
  }, [targetColor]);

  const generateNewColors = () => {
    const newColors = Array(6)
      .fill(null)
      .map(() => getRandomColor());
    if (!newColors.includes(targetColor)) {
      newColors[Math.floor(Math.random() * 6)] = targetColor;
    }
    setColors(newColors);
  };

  return (
    <div className="color-options">
      {colors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => onGuess(color)}
        />
      ))}
    </div>
  );
};

ColorOptions.propTypes = {
  targetColor: PropTypes.string.isRequired,
  onGuess: PropTypes.func.isRequired,
};

export default ColorOptions;
