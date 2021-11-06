import { type } from "./type";
import { subtract, sum } from "./utils";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT_COUNTER:
      return {
        count: sum(state.count, action.payload),
      };
    case type.DECREMENT_COUNTER:
      return {
        count: subtract(state.count, action.payload),
      };
    default:
      return state;
  }
};

export default counterReducer;
