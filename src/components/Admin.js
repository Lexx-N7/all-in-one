import React,{useState} from "react";
import { Redirect } from "react-router-dom";

export default function Admin({ store }) {
  let [logout, setLogout] = useState(false);

  let handleRemove =()=>{
      setLogout(true)
      store('remove')
  }

  if (logout) return <Redirect to="/logout" />;
  return (
    <>
      <h1 style={{ color: "#3498db" }}>Admin Page</h1>
      <button onClick={handleRemove} style={{ color: "red" }}>
        {" [ ] "}log out
      </button>
    </>
  );
}
