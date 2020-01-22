import React, { useContext } from "react";
import { MyContext } from "../../context";
import Todo from "./Todo";
import Spinner from "./Spinner";
import uuid from "uuid";

export default function Todos() {
  let { todos,isLoading, setState } = useContext(MyContext);
 
  if (todos.length === 0) return <Spinner />;
  return (
    <>
      {todos.map(item => {
        return <Todo key={uuid.v4()} todo={item} />;
      })}
      {isLoading && <Spinner/>}
    </>
  );
}


