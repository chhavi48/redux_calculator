import { UPDATE } from "./actionTypes";
import { ADD } from "./actionTypes";
import { SUBTRACT } from "./actionTypes";
import { MULTIPLY } from "./actionTypes";
import { DIVIDE } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { EQUAL } from "./actionTypes";

/*actions below pass operation through to reducer, update has input to update the display field.
 others require no data to be passed. */

export const updateDisplay = content => ({
  type: UPDATE, 
  payload: {
    input: content,
    operation: "num"
  }
})

export const addition = content => ({
  type: ADD,
  payload: {
    operation: "operator"
  }
});

export const subtraction = content => ({
  type: SUBTRACT,
  payload: {
    operation: "operator"
  }
})

export const multiplication = content => ({
  type: MULTIPLY,
  payload: {
    operation: "operator"
  }
});

export const division = content => ({
  type: DIVIDE,
  payload: {
    operation: "operator"
  }
});

export const clearDisplay = content => ({
  type: CLEAR,
  payload: {
    operation: "clear"
  }
})

export const equal = content => ({
  type: EQUAL,
  payload: {
    operation: "equal"
  }
})