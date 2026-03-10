import { useState } from "react";
import Square from "./components/Square/Square";

export default function App() {

  const [xIsNext, SetXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i:number) {

    const nextSquares = squares.slice();

    if(squares[i]){
        return; // Verificado se já existe no array algum campo com elemento adicionado
    }
    else if (xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O"
    }
    setSquares(nextSquares);
    SetXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="titulo">Jogo Da Velha</div>

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