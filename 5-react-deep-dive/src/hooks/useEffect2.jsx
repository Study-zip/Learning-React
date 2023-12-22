import { useEffect } from "react";

useEffect(() => {
  function addMouseEvent() {
    console.log(1);
  }

  window.addEventListener("click", addMouseEvent);

  // 클린업 함수
  // 그리고 이 클린업 함수는 다음 렌더링이 끝난 뒤에 실행된다.
  return () => {
    console.log("클린업 함수 실행!", 1);
    window.removeEventListener("click", addMouseEvent);
  };
}, [counter]);

// 이후 실행
useEffect(() => {
  function addMouseEvent() {
    console.log(2);
  }

  window.addEventListener("click", addMouseEvent);

  // 클린업 함수
  return () => {
    console.log("클린업 함수 실행!", 2);
    window.removeEventListener("click", addMouseEvent);
  };
}, [counter]);
