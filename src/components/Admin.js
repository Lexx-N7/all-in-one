import React from "react";

export default function Admin({ history, store }) {
  let handleRemove = () => {
    store("remove");
    history.push("/logout");
  };

  return (
    <>
      <h1 style={{ color: "#3498db" }}>Admin Page</h1>
      <button onClick={handleRemove} style={{ color: "red" }}>
        {" [ ] "}log out
      </button>
    </>
  );
}
