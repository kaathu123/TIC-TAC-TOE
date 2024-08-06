import React, { useEffect, useState } from 'react';
import './TicTac.css';

const TicTac = () => {
    const [next, setNext] = useState(true); //A boolean state to keep track of whether the next move is 'X' or 'O'.
    const [squares, setSquares] = useState(Array(9).fill("")); //An array of 9 elements representing the game board squares, initially empty.
    const [winner, setWinner] = useState(null); //A state to store the winner of the game, initially null.

    const reset = () => {
        setNext(true);
        setSquares(Array(9).fill(""));
        setWinner(null);
    };

    const handleSquare = (i) => {
        if (squares[i] === "" && !winner) {
            setSquares((prev) => {
                const updatedSquares = [...prev];
                updatedSquares[i] = next ? "X" : "O";
                return updatedSquares;
            });
            setNext(!next);
        }
    };

    useEffect(() => {
        const checkWinner = () => {
            const combos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];

            for (let combo of combos) {
                const [a, b, c] = combo;
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }
            if (squares.every((item) => item !== "")) {
                return "draw";
            }
            return null;
        };

        const winner = checkWinner();
        if (winner) {
            setWinner(winner);
            setTimeout(() => {
                alert(winner === "draw" ? "It's a draw!" : `Congratulations! Player ${winner} wins!`);
                reset();
            }, 100);
        }
    }, [squares]);

    return (
        <div className="maincon">
            <div className="heading">TIC-TAC-TOE</div>
            <div className="button">
                <input type='button' value='New Game' className='newgame' onClick={reset} />
            </div>
            <div className="columngrp">
                <div className="col">
                    <div className="item" onClick={() => handleSquare(0)}>{squares[0]}</div>
                    <div className="item" onClick={() => handleSquare(1)}>{squares[1]}</div>
                    <div className="item" onClick={() => handleSquare(2)}>{squares[2]}</div>
                </div>
                <div className="col">
                    <div className="item" onClick={() => handleSquare(3)}>{squares[3]}</div>
                    <div className="item" onClick={() => handleSquare(4)}>{squares[4]}</div>
                    <div className="item" onClick={() => handleSquare(5)}>{squares[5]}</div>
                </div>
                <div className="col">
                    <div className="item" onClick={() => handleSquare(6)}>{squares[6]}</div>
                    <div className="item" onClick={() => handleSquare(7)}>{squares[7]}</div>
                    <div className="item" onClick={() => handleSquare(8)}>{squares[8]}</div>
                </div>
            </div>
            <div className="but">
                <div className="butt1">X</div>
                <div className="butt2">O</div>
            </div>
        </div>
    );
}

export default TicTac;
