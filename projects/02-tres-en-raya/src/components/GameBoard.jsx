import { Square } from "./Square.jsx";

export const GameBoard = ({board, updateBoard}) => (
    <>
        {board.map((square, index) => (
            <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
            </Square>
        ))}
    </>
);
