import React from "react";
import PropTypes from "prop-types";

const GameStatus = ({ feedback, score, attempts }) => {
  return (
    <div className="game-status">
      <p data-testid="gameStatus">{feedback}</p>
      <p data-testid="score">Score: {score}</p>
      <p>Attempts: {attempts} / 20</p>
    </div>
  );
};

GameStatus.propTypes = {
  feedback: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  attempts: PropTypes.number.isRequired,
};

export default GameStatus;
