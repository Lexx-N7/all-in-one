import React,{useState} from "react";

export default function Navbar({amount}) {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mx-auto">navbar {amount}</span>
    </nav>
  );
}
