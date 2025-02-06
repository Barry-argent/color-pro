import React from "react";

const Score = ({ score }) => {
  return (
    <p data-testid="score" className="score">
      Score: {score}
    </p>
  );
};

export default Score;
