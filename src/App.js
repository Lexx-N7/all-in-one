import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";
import data from "./data";

function App() {
  let [counters, setCounters] = useState([]);
  let [amount, setAmount] = useState();

  useEffect(() => {
    let stored = storage("get");
    if (stored) {
      setCounters(stored);
    } else {
      let tempCounters = data.map(item => {
        return { ...item };
      });
      setCounters(tempCounters);
    }
  }, []);

  useEffect(() => {
    handleReduce();
    storage("set");
  }, [counters]);

  let storage = status => {
    if (status === "set") {
      sessionStorage.setItem("counters", JSON.stringify(counters));
    } else {
      return JSON.parse(sessionStorage.getItem("counters"));
    }
  };

  let handleReduce = () => {
    if (counters.length <= 0) return;
    let values = counters.map(counter => counter.value);
    let tempAmount = values.reduce((total, num) => total + num);
    setAmount(tempAmount);
  };

  let handleDelete = counterId => {
    let tempCounters = counters.filter(counter => counter.id !== counterId);
    setCounters(tempCounters);
  };

  let handleIncrement = (counter, adding) => {
    let tempCounters = [...counters];
    let index = tempCounters.indexOf(counter);
    tempCounters[index] = { ...counter };
    adding ? tempCounters[index].value++ : tempCounters[index].value--;
    setCounters(tempCounters);
    tempCounters[index].value < 0 && handleDelete(counter.id);
  };

  let handleReset = () => {
    let tempCounters = data.map(counter => {
      counter.value = 0;
      return counter;
    });
    setCounters(tempCounters);
  };

  let all = {
    counters,
    onDelete: handleDelete,
    onIncrement: handleIncrement,
    onReduce: handleReduce
  };

  return (
    <>
      <Navbar amount={amount} />
      <button className="btn btn-warning m-3" onClick={handleReset}>
        Reset
      </button>
      <Counters {...all} />
    </>
  );
}

export default App;
