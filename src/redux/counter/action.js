import { type } from "./type";

const incrementCounter = (number) => {
  
  return { type: type.INCREMENT_COUNTER, payload: number  };
};

const decrementCounter = (value) => {
  return { type: type.DECREMENT_COUNTER, payload: value };
};

export { incrementCounter, decrementCounter };
