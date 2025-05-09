// src/components/Game.js
import React, { useState, useEffect } from 'react';

function Game({ playerChoice }) {
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  const images = {
    rock: "URL_O_RUTA_IMAGEN_ROCK", // Reemplaza con tus rutas
    paper: "URL_O_RUTA_IMAGEN_PAPER", // Reemplaza con tus rutas
    scissors: "URL_O_RUTA_IMAGEN_SCISSORS", // Reemplaza con tus rutas
  };

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (!player || !computer) return null;
    if (player === computer) return "¡Empate!";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "¡Ganaste!";
    } else {
      return "¡La computadora gana!";
    }
  };

  useEffect(() => {
    if (playerChoice) {
      const computer = getComputerChoice();
      setComputerChoice(computer);
      const result = determineWinner(playerChoice, computer);
      setGameResult(result);

      setTimeout(() => {
        setComputerChoice(null);
        setGameResult(null);
      }, 2000);
    }
  }, [playerChoice]);

  return (
    <div>
      <h2>Tu elección: {playerChoice ? playerChoice.toUpperCase() : "Haz un gesto"}</h2>
      {computerChoice && (
        <h2>Elección de la computadora: {computerChoice.toUpperCase()}</h2>
      )}
      <h3>Resultado: {gameResult || ""}</h3>
      {computerChoice && images[computerChoice] && (
        <img src={images[computerChoice]} alt={`Computadora eligió ${computerChoice}`} style={{ height: 80 }} />
      )}
    </div>
  );
}

export default Game;