import React, { useContext } from "react";
import { MyContext } from "../../context";

export default function Todo({ todo }) {
  let { handleDeleteTodo: deleteTodo,handleMarkTodo:markTodo } = useContext(MyContext);

  let styleTodo = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  return (
    <div className="m-3">
      <input type="checkbox" onChange={()=>markTodo(todo.id) } checked={todo.completed}/>
      <span
        className="bg-primary text-white p-2 font-weight-bold lead"
        style={styleTodo()}
      >
        {todo.title}
      </span>
      <button className="btn  btn-danger " onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
    </div>
  );
}
