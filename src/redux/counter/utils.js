export const sum = (count, payload) => {
  if (isNaN(payload)) { //Number 100%
    return count;
  } else if (payload.toString().length === 0) {
    return count + 1;
  } else {
    return count + Number(payload);
  }
};

export const subtract = (count, payload) => {
  if (isNaN(payload)) {
    return count;
  } else if (payload.toString().length === 0) {
    return count - 1;
  } else {
    return count - Number(payload);
  }
};
