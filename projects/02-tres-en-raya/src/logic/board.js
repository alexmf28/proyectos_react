import { winnerPositions } from "../constants/constants";

// Revisar combinaciones ganadoras
export  const checkWinner = (checkingBoard) => {
    for (const combo of winnerPositions) {
      const [a, b, c] = combo;
      if (
        checkingBoard[a] &&
        checkingBoard[a] === checkingBoard[b] &&
        checkingBoard[a] === checkingBoard[c]
      ) {
        return checkingBoard[a];
      }
    }
    // si no hay ganador
    return null;
  };

  export const checkEndGame = (newBoard) => {
    //revisamos si hay empate
    //si no hay espacios vacios en el tablero
    return newBoard.every((square) => square !== null);
  };