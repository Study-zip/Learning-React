import React, { MouseEvent, useEffect } from "react";

export default function Event() {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      console.log("이벤트가 document까지 올라옴");
      // Document에 적용된 이벤트를 확인하지 못한다.
    });
  }, []);

  function 안녕하세요(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    // stipPropagation이 적용되지 않는다.
    alert("안녕하세요!");
  }

  return <button onClick={안녕하세요}>리액트 버튼</button>;
}
