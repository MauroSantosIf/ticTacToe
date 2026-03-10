import { useState } from "react";
import Square from "./components/Square/Square";

export default function App() {

  const [xIsNext, SetXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  

  function restartGame() {
  setSquares(Array(9).fill(null));
  setXIsNext(true);
  }

  function calculateWinner(squares: any[]){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i:number) {

    if(squares[i] || calculateWinner(squares)){
        return; // Verificado se já existe no array algum campo com elemento adicionado ou se alguem já venceu
    }

    const nextSquares = squares.slice();

    if (xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O"
    }

    const winner = calculateWinner(nextSquares);

    if (winner === "X") {
      setScoreX(scoreX + 1);
    } else if (winner === "O") {
      setScoreO(scoreO + 1);
    }


    setSquares(nextSquares);
    SetXIsNext(!xIsNext);
  }

  return (
    <>
      <div>
        <button className="button-restart" onClick={restartGame}>
          Revanche
        </button>
      </div>
      <div className="titulo">Jogo Da Velha</div>

      <div className="scoreboard">
        <div className="score-title">PLACAR</div>

        <div className="score">
          <span className="player-x">X</span>
          <span className="points">{scoreX}</span>
        </div>

        <div className="score">
          <span className="player-o">O</span>
          <span className="points">{scoreO}</span>
        </div>
      </div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}