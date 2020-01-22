import React from "react";

export default function Todo({ todo, _toggleTodo }) {
  
    let styleTodo ={
        textDecoration: todo.isCompleted? 'line-through': 'none'
    }

  return (
    <>
      <p style={styleTodo}>
        {" "}
        <input
          type="checkbox"
          onChange={() => _toggleTodo(todo)}
          checked={todo.isCompleted}
        />
        {todo.title}
      </p>
    </>
  );
}
