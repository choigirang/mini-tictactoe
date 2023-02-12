import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Square from "./components/Square";

function App() {
  // board에 작성해 둔 history는 Square와 Board 컴포넌트에서 둘 다
  // 사용을 해야하며 기억값을 갖고 App의 gameinfo에 들어가야 하기에
  // App컴포넌트로 옮겨준다.
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // 3개가 연결되어 클릭된 경우

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    // Array(9)개 중([null,null,null...]) 'X','X','X' 식으로 3개의 버튼에 들어온 경우 => 이겼다
    return null;
    // 승자가 없는 경우
  };
  const current = history[stepNumber];
  // 현재 저장된 배열의 마지막 번째
  const winner = calculateWinner(current.squares);
  // 현재 갖고 있는 배열의 squares를(객체) 지칭
  let status;
  if (winner) {
    status = "Winner : " + winner;
    // 승자가 있는 경우
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    // const newSquares = current.squares.slice();
    // squares를 복사해준다.
    // square 배열을 직접 변경했다면 시간 여행을 구현하기 어려웠을 것이다.
    // 하지만 slice()를 사용하여 매 동작 이후에 squares 배열의 복사본을 만들었기에
    // 과거의 모든 버전을 저장하고 이미 지나간 차례를 탐색할 수 있다.

    // 과거로 돌아가기
    const newHistory = history.slice(0, stepNumber + 1);
    // 마지막 배열은 복사하지 않으니, 그 전의 인덱스까지
    const newCurrent = newHistory[history.length - 1];
    // history에서 복사한 newHistory 중 현재의 (마지막) 배열
    const newSquares = newCurrent.squares.slice();
    // 현재의 객체에서 배열만 꺼내준다.
    if (calculateWinner(newSquares) || newSquares[i]) {
      // 승자가 있거나, newsquares[i]가 존재하는 경우(이미 한 칸을 클릭한 경우)
      return;
      // 아래의 코드를 실행시키지 않는다.
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, { squares: newSquares }]);
    // 현재 저장된 history에 우리가 클릭한 값을 추가

    // 상태를 변경시키는 setState ({squares : squares}) 축약
    setXIsNext(!xIsNext);
    // false => true, true => false
    setStepNumber(newHistory.length);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className="move-button">
          {desc}
        </button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    // setXisNext에 따라 다음 사람이 누구인지가 출력된다.
    //
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
