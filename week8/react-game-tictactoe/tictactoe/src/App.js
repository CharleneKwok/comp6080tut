import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [Winner, setWinner] = useState("");
  const [currPlayer, setCurrPlayer] = useState("X");
  const [winCells, setWinCells] = useState([]);

  // 2.handle clickcell
  const handleClickCell = (index) => {
    // check if cell was clicked before
    // 5. show condition, have 2 winners same time
    if (!board[index] && winCells.length === 0) {
      board[index] = currPlayer;
      // check player win or not
      checkWin();
      // change to next player
      setCurrPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  // 3. check win
  const checkWin = () => {
    // create 2d arrays for win conditions
    // row, column, diagonal
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const winCon of winConditions) {
      // destructure the array to create variables for each element
      const [a, b, c] = winCon;
      // check if these 3 cells are occpied by current player
      if (
        board[a] === currPlayer &&
        board[b] === currPlayer &&
        board[c] === currPlayer
      ) {
        setWinCells(winCon);
        setWinner(currPlayer);
        // 4. Increase respective player’s win count in local storage
        storeWinTimes();
        return;
      }
    }
  };

  const storeWinTimes = () => {
    const winTimes = localStorage.getItem(currPlayer);
    if (winTimes) {
      localStorage.setItem(currPlayer, +winTimes + 1);
    } else {
      localStorage.setItem(currPlayer, 1);
    }
  };

  return (
    <div className="App">
      <div className="board">
        {/* 1. create 9 cells board */}
        {board.map((cell, i) => (
          <div
            className={`cell ${winCells.includes(i) ? "win" : ""}`}
            key={i}
            onClick={() => handleClickCell(i)}
          >
            {cell}
          </div>
        ))}
      </div>
      <h3>Winner: {Winner}</h3>
      <h3>Counts: {localStorage.getItem(Winner) ?? 0}</h3>
    </div>
  );
};

export default App;
