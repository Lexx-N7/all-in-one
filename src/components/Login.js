import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Login({ store }) {
  let [state, setState] = useState({
    username: "",
    password: "",
    isLoggedIn: false
  });

  useEffect(() => {
    store("get") && setState({ isLoggedIn: true });
  }, [store]);

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    if (state.username === "abc" && state.password === "123") {
        setState({ isLoggedIn: true });
        store("set");
    }
  };

  if (state.isLoggedIn) return <Redirect to="/admin" />;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}
