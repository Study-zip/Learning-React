import React from "react";
import { useEffect, useRef } from "react";

export default function Button() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.onclick = function click() {
        alert("안녕하세요");
      };
    }
  }, []);

  function 안녕하세요() {
    alert("안녕하세요");
  }

  return (
    <>
      <button onClick={안녕하세요}>리액트 버튼</button>
      <button ref={buttonRef}>그냥 버튼</button>
    </>
  );
}
