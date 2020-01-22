import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import uuid from "uuid";

export default function App() {
  let [state, setState] = useState([
    { title: "example of todo", id: uuid.v4(), isCompleted: false }
  ]);

  useEffect(()=>{
    let stored = storage('get')
    if(stored && stored.length !== 0){
      setState(stored)
    }
    
  },[])

  useEffect(() => {
    // console.log(state);
    storage('set')
  }, [state]);

  let addTodo = title => {
    let tempState = [...state, { title, id: uuid.v4(), isCompleted: false }];
    setState(tempState);
  };

  let toggleTodo = todo => {
    let tempState = [...state];
    // let todo = tempState.find(item=>item.id === id) // if id sended
    let index = tempState.indexOf(todo);
    tempState[index] = { ...todo };
    tempState[index].isCompleted = !tempState[index].isCompleted;
    setState(tempState);
  };

  let getNotCompletedTodos = () => {
    return state.filter(item => !item.isCompletedTodos).length;
  };

  let cleanCompletedTodos =()=>{
    let notCompletedTodos = state.filter(item=> !item.isCompleted)
    setState(notCompletedTodos)
  }

  let storage =(status)=>{
    if(status === 'set') { //first make set for quick process
      sessionStorage.setItem('stored',JSON.stringify(state))
    } else {
      return JSON.parse(sessionStorage.getItem('stored'))
    }
  }

  return (
    <>
      <AddTodo _addTodo={addTodo} />
      <Todos _state={state} _toggleTodo={toggleTodo} />
      <div>{getNotCompletedTodos()} left to do</div>
      <button onClick={cleanCompletedTodos}>clean</button>
    </>
  );
}
