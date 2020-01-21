import React from "react";
import Counter from "./Counter";

export default function Counters({
  counters,
  onDelete,
  onIncrement,
  onReduce
}) {
  let methods = {
    onDelete,
    onIncrement,
    onReduce
  };

  if (counters.length == 0) return "empty";
  return (
    <div className="m-5">
      {counters.map(counter => {
        return <Counter key={counter.id} counter={counter} {...methods} />;
      })}
    </div>
  );
}
