import { useState } from "react";
import ColorBox from "./ColorBox";
import ColorOptions from "./ColorOptions";
import GameStatus from "./GameStatus";
import GameOver from "./GameOver";
import { getRandomColor } from "./utils";
import "./ColorGame.css";

const ColorGame = () => {
  const [targetColor, setTargetColor] = useState(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [gameStarted, setGameStarted] = useState(false); 
  const [gameOver, setGameOver] = useState(false);  

  const handleGuess = (color) => {
    if (attempts >= 6) return;   
    setAttempts(attempts + 1);

    if (color === targetColor) {
      setScore(score + 1);
      setFeedback("Correct! 🎯");
    } else {
      setFeedback("Wrong! 😢");
    }

    if (attempts < 6) {  
      setTargetColor(getRandomColor());
    }

    if (attempts >= 19) {
      setGameOver(true); 
    }
  };

  const startNewGame = () => {
    setGameStarted(true);
    setTargetColor(getRandomColor());
    setScore(0);
    setAttempts(0);
    setFeedback("");
    setGameOver(false);  
  };

  const resetGame = () => {
    setTargetColor(getRandomColor());
    setScore(0);
    setAttempts(0);
    setFeedback("");
    setGameStarted(false); 
    setGameOver(false);  
  };

  return (
    <div className="game-container">
      <h1>Color Guessing Game</h1>

      {!gameStarted ? ( 
        <button data-testid="startGameButton" onClick={startNewGame}>
          Start New Game
        </button>
      ) : (
        <>
          <p data-testid="gameInstructions">Guess the correct color! You have 20 attempts.</p>
          <ColorBox color={targetColor} />
          {attempts < 20 && !gameOver ? (
            <>
              <ColorOptions targetColor={targetColor} onGuess={handleGuess} />
              <GameStatus feedback={feedback} score={score} attempts={attempts} />
              <p data-testid="attemptsRemaining">Attempts Remaining: {20 - attempts}</p>
 
              <button data-testid="restartGameButton" onClick={() => setGameOver(true)}>
                Restart Game
              </button>
            </>
          ) : (
            <GameOver score={score} onReset={resetGame} />
          )}
        </>
      )}

      {gameOver && !gameStarted && (
        <div className="game-over-container">
          <h2>Game Over!</h2>
          <p>Your Score: {score}</p>
          <button onClick={resetGame}>Start New Game</button>
        </div>
      )}
    </div>
  );
};

export default ColorGame;
