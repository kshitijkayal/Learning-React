import React from "react";
import ReactDOM from "react-dom/client";

const head2 = React.createElement("h3", { id: "heading" }, "Hello from React");
console.log(head2);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag inside child 1 div"),
    React.createElement("h2", {}, "I am h2 tag inside child 1 div"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag inside child 2 div"),
    React.createElement("h2", {}, "I am h2 tag inside child 2 div"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
