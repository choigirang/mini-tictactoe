import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        // 함수도 내려준다.
      />
    ); // 만들어진 배열의 index 위치를 가르킨다.
  };

  //   render() { 클래스 컴포넌트에서 렌더링하는 메서드이기에 지워준다.
  return (
    <div className="board-wrapper">
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
