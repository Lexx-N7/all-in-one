import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <>
      <h1>Log out page</h1>
      <Link to="/"> Go to login page{">"}</Link>
    </>
  );
}
