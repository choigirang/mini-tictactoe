import React from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  //   constructor(props) {
  //     super(props);
  //     // 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용
  //     // 자식 클래스 내에서 부모 클래스의 메서드를 호출할 때 사용
  //     // 해당 컴포넌트 내부에서 데이터를 전달할 때
  //     this.state = {
  //       value: null,
  //     };
  //   }
  // 값을 공유하는 두 개의 자식 컴포넌트가 있고
  // 데이터는 단방향이기 때문에 부모 컴포넌트가 이 값을 가져야 한다.
  // 부모 컴포넌트인 Board에 위 값을 기억시킨다. state

  return (
    <button
      className="square"
      onClick={
        onClick
        // this props 안에 onClick을 불러오는 onClick은 handleClick을 실행시킨다.
      }
    >
      {value}
    </button>
  );
};

export default Square;
