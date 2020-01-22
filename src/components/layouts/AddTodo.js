import React, { useState, useContext } from "react";
import { MyContext } from "../../context";

export default function AddTodo() {
  let {  setState, handleAddTodo: addTodo } = useContext(MyContext);
  let [field, setField] = useState({ title: "" });

  let handleChange = e => {
    let { name, value } = e.target;
    setField({ ...field, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    if(field.title === '') return
    addTodo(field.title);
    setField({...field,title: ''})
  };
  return (
    <form className="form-inline m-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="title"
          value={field.title}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary">add</button>
    </form>
  );
}
