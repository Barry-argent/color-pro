import PropTypes from "prop-types";

const GameOver = ({ score, onReset }) => (
    <div className="game-over-container">
      <h2>Game Over!</h2>
      <p>Your Score: {score}</p>
      <button onClick={onReset}>Start New Game</button>
    </div>
  );
  
GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default GameOver;
