import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../../redux/counter/action";

export default function CountDetail({}) {
  const [value, setValue] = useState("");
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementCounter());

  const handleDecrement = () => dispatch(decrementCounter(value));

  return (
    <div>
      <h1>Count Detail</h1>

      <div
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="counter"
          style={{ margin: 30 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleIncrement}>increment</button>
        <div style={{ fontSize: 20, margin: 20 }}>{count}</div>
        <button onClick={handleDecrement}> decrement</button>
      </div>
    </div>
  );
}
