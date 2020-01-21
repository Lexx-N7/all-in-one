import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Admin from "./components/Admin";
import uuid from "uuid";

function App() {
  let store = status => {
    if (status === "set") {
      sessionStorage.setItem("key", uuid.v4());
    } else if (status === "remove") {
      sessionStorage.removeItem("key");
    }
    return sessionStorage.getItem("key");
  };

  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => <Login history={props.history} store={store} />}
      />
      <Route
        exact
        path="/admin"
        render={props => <Admin history={props.history} store={store} />}
      />
      <Route path="/logout" component={Logout} />
    </Router>
  );
}

export default App;
