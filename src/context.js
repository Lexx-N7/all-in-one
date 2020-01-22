import React, { useState, useEffect } from "react";
import axios from "axios";

export const MyContext = React.createContext();

export default function MyProvider({ children }) {
  let [state, setState] = useState({
    todos: [],
    isLoading: false
  });

  useEffect(() => {
    setState({ ...state, isLoading: true });
    let getData = async () => {
      let { data } = await base("/todos");
      let todos = data.filter(item => item.id < 5);
      setState({ todos, isLoading: false });
    };
    getData();
  }, []);

  let handleAddTodo = title => {
    setState({ ...state, isLoading: true });
    let getData = async () => {
      let { data } = await base.post("/todos", {
        title
      });

      setState({ todos: [...state.todos, data], isLoading: false });
    };
    getData();
  };

  let handleDeleteTodo = id => {
    setState({ ...state, isLoading: true });
    let getData = async () => {
      let { data } = await base(`/todos/${id}`);
      let todos = state.todos.filter(item => item.id !== data.id);
      setState({ todos, isLoading: false });
    };
    getData();
  };

  let handleMarkTodo = todo => {
    // let todos = state.todos.map(todo => {
    //   if (todo.id == id) {
    //     todo.completed = !todo.completed;
    //   }
    //   return todo;
    // });
    // setState({ todos });

    let todos = [...state.todos]         //not referencing way
    let index = todos.indexOf(todo)
    todos[index] = {...todo}
    todos[index].completed = !todos[index].completed
    setState({todos})
  };

  return (
    <MyContext.Provider
      value={{
        ...state,
        setState,
        handleAddTodo,
        handleDeleteTodo,
        handleMarkTodo
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

let base = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
