# ✋🤚 Hand Gesture Duel

**Hand Gesture Duel** es un juego online de **Piedra, Papel o Tijera** donde cada jugador usa su **cámara web** para mostrar gestos de mano.  
La app detecta automáticamente el gesto de cada jugador y determina quién gana la ronda.

---

## 🚀 Tecnologías utilizadas

- **React** — Frontend de la aplicación.
- **TensorFlow.js + MediaPipe Hands** — Para detección de manos en tiempo real.
- **Fingerpose** — Para reconocer los gestos (piedra, papel, tijera).
- **Socket.IO** — Para comunicación en tiempo real entre los jugadores.
- **React-Webcam** — Para capturar el video de la cámara.

---

## 🎯 Funcionalidades principales

- Crear y unirse a **salas privadas** para jugar.
- Detección automática del gesto de mano (piedra, papel o tijera).
- **Comparación en tiempo real** de gestos entre dos jugadores.
- **Sistema de vidas** (3 vidas por jugador).
- Visualización del estado de la partida:
  - Vidas restantes.
  - Resultado de cada ronda (quién ganó o perdió).
- Mensaje final mostrando el **ganador**.

---

## 🧠 Arquitectura general

- **Frontend:** React + TensorFlow.js para detección de gestos y UI.
- **Servidor:** Socket.IO para manejar salas, gestos y resultados.
- **Comunicación:** WebSockets (o como alternativa, Firebase Realtime Database).

---

## 🔥 Instalación local

1. Clona este repositorio:
```bash
git clone https://github.com/juanjosbg/hand-gesture-duel.git
```

2. Instala las dependencias:
```bash
npm install
```

---

## 🔁 Flujo de juego

- **Cada jugador entra a una sala** (ej: https://tujuego.com/sala/abc123).
- **La app accede a la cámara** para detectar gestos.
- Cada jugador muestra un gesto (✊ ✋ ✌️).
- El gesto se envía al servidor.
- Cuando ambos gestos llegan:
        - Se comparan.
        - Se determina el ganador de la ronda.
- Se actualizan las vidas de cada jugador.
- El juego continúa hasta que uno de los dos quede sin vidas.

---

## 📄 Licencia

- **Este proyecto** está bajo la **licencia MIT.**
- Libre para usar, modificar y compartir.


--------------------------------
--------------------------------
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
