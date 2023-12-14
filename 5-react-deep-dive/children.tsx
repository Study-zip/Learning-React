// before

// import { createElement, PropsWithChildren } from "react";

// function TextOrHeading({
//   isHeading,
//   children,
// }: PropsWithChildren<{ isHeading: boolean }>) {
//   return isHeading ? (
//     <h1 className="text">{children}</h1>
//   ) : (
//     <span className="text" {...children}></span>
//   );
// }

// after

import { createElement, PropsWithChildren } from "react";

function TextOrHeading({
  isHeading,
  children,
}: PropsWithChildren<{ isHeading: boolean }>) {
  return createElement(
    isHeading ? "h1" : "span",
    { className: "text" },
    children
  );
}
