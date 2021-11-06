import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/action";

const Count = ({ handleNavigate }) => {
  const { count } = useSelector((state) => state.counter);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incrementCounter(value));
  const handleDecrement = () => dispatch(decrementCounter(value));

  return (
    <div>
      <h1>Count</h1>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{ margin: 30 }}
          placeholder="counter"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleIncrement}>increment</button>
        <div style={{ fontSize: 20, margin: 20 }}>{count}</div>
        <button onClick={handleDecrement}> decrement</button>
      </div>

      <button onClick={handleNavigate}>Visit Count Detail</button>
    </div>
  );
};

export default Count;
