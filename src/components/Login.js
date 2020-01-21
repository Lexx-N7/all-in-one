import React, { useState, useEffect } from "react";

export default function Login({ store,history }) {
  let [state, setState] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    store("get") && history.push('/admin')
  }, [store]);

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    if (state.username === "abc" && state.password === "123") {
      store("set");
      history.push('/admin')
    }
  };

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
