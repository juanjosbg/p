// App.js
import React, { useState } from "react";
import HandGestureDetector from "./components/HandGestureDetector";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const images = {
    rock: "URL_O_RUTA_IMAGEN_ROCK", // Reemplaza con tus rutas
    paper: "URL_O_RUTA_IMAGEN_PAPER", // Reemplaza con tus rutas
    scissors: "URL_O_RUTA_IMAGEN_SCISSORS", // Reemplaza con tus rutas
  };

  const handleGestureDetected = (gesture) => {
    console.log("Gesto detectado en App:", gesture);
    setPlayerChoice(gesture);
    setEmoji(gesture);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HandGestureDetector onGestureDetected={handleGestureDetected} />
        {emoji && images[emoji] && (
          <img
            src={images[emoji]}
            alt={emoji}
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              height: 80,
            }}
          />
        )}
        <Game playerChoice={playerChoice} />
      </header>
    </div>
  );
}

export default App;