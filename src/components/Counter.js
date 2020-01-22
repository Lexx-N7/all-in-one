import React from "react";

export default function Counter({ counter, onDelete, onIncrement, onReduce }) {
  return (
    <>
      <p>
        <button
          className="btn btn-secondary"
          onClick={() => onIncrement(counter, false)}
        >
          remove
        </button>
        <button className="btn btn-lg">{counter.value}</button>

        <button
          className="btn btn-primary m-1"
          onClick={() => onIncrement(counter, true)}
        >
          add
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => onDelete(counter.id)}
        >
          delete
        </button>
      </p>
    </>
  );
}
