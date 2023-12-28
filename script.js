import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "HEY I AM A HQ TAG")
  )
);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading1", xyz: "abc" },
  "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
