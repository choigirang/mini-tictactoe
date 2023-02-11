import React, { useState } from "react";
import Square from "./Square";
// import "./Board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const status = `Next player${xIsNext ? "X" : "O"}`;

  const handleClick = (i) => {
    const newSquares = squares.slice();
    // squares를 복사해준다.
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    // 상태를 변경시키는 setState ({squares : squares}) 축약
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        // 함수도 내려준다.
      />
    ); // 만들어진 배열의 index 위치를 가르킨다.
  };

  //   render() { 클래스 컴포넌트에서 렌더링하는 메서드이기에 지워준다.
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {/* Board 안에서 선언된 renderSquare, this는 Board를 가르킴, Board안에 선언된 renderSquare */}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
  //   }
};

export default Board;
