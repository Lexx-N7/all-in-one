import React from "react";
import Todo from "./Todo";

export default function Todos({ _state, _toggleTodo }) {
  if (!_state) return "loading...";
  return (
    <>
      {_state.map(item => (
        <Todo key={item.id} todo={item} _toggleTodo={_toggleTodo} />
      ))}
    </>
  );
}
