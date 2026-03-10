import "./square.css";

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {

  const className = `square ${value === "X" ? "x" : value === "O" ? "o" : ""}`;

  return (
    <button
      className={className}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}