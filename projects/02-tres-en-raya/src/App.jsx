import { useState } from "react";
import canvasConfetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { turns } from "./constants/constants.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { checkWinner, checkEndGame } from "./logic/board.js";
import { GameBoard } from "./components/GameBoard.jsx";
import { saveToStorage, resetStorage } from "./storage/index.js";

function App() {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem("board");
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem("turn");
    //si es null o undefined
    return turnStorage ?? turns.X;
  });

  //null no hay ganador y false es empate
  const [winner, setWinner] = useState(null);

  // Recibe el index de square seleccionado
  const updateBoard = (index) => {
    // validar si la posicion del tablero tiene contenido
    if (board[index] || winner) {
      return;
    }
    // se crea un nuevo tablero con valor de la casilla seleccionada segun posicion
    const newBoard = [...board];
    newBoard[index] = turn;
    // se pasa el nuevo tablero para actualizar
    setBoard(newBoard);
    // se cambia el turno
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);
    //guardar turno en localstorage
    saveToStorage({
      board: newBoard,
      turn: newTurn,
    });
    //ver quien ganó
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      canvasConfetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);
    resetStorage();
  };
  return (
    <main className="board">
      <h1>Tres en Raya</h1>
      <section className="game">
        <GameBoard board={board} updateBoard={updateBoard} />
      </section>
      <section className="turn">
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </section>
      <button onClick={resetGame}>Volver a jugar</button>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}

export default App;
