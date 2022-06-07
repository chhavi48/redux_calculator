import { ADD } from "../actions/actionTypes";
import { SUBTRACT } from "../actions/actionTypes";
import { MULTIPLY } from "../actions/actionTypes";
import { DIVIDE } from "../actions/actionTypes";
import { UPDATE } from "../actions/actionTypes";
import { CLEAR } from "../actions/actionTypes";
import { EQUAL } from "../actions/actionTypes";
import * as math from 'mathjs'

const initialState = {
  display: '0',
  prevOp: "",
  accumulated: "0",
  history: '0'
}


export default function (state = initialState, action) {
  switch (action.type) {


    case UPDATE: {
      const updateDisplay = action.payload;
      // dont update if one decimal is already present in display value. return state
      if ((state.display.includes('.') && updateDisplay.input === ".") || state.display.length > 8) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          // if display is at 0, normally from being cleared, or prev button was operator, overwrite 0 or value
          display: state.display == '0' || state.prevOp === "operator" ? updateDisplay.input
            : state.display + updateDisplay.input,
          prevOp: updateDisplay.operation,
        }
      }
    }


    // when operator actions are fired, remove last entry if double operator used, set history as ongoing string. 
    case ADD: {

      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " + "
          : state.accumulated != "0" ? state.accumulated + " + "
            : history() + state.display + " + ",
        prevOp: "operator"
      }
    }

    case SUBTRACT: {

      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " - "
          : state.accumulated != "0" ? state.accumulated + " - "
            : history() + state.display + " - ",
        prevOp: "operator"
      }
    }

    case MULTIPLY: {
      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " * "
          : state.accumulated != "0" ? state.accumulated + " * "
            : history() + state.display + " * ",
        prevOp: "operator"
      }
    }

    case DIVIDE: {
      const history = () => state.prevOp === "operator" ? state.history.slice(0, state.history.length - 4)
        : state.history;

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " / "
          : state.accumulated != "0" ? state.accumulated + " / "
            : history() + state.display + " / ",
        prevOp: "operator"
      }
    }
    // clear resets state
    case CLEAR: {
      return {
        ...state,
        display: '0',
        prevOp: "clear",
        accumulated: 0,
        history: "0"
      }
    }
    // equal will concat display to history to give current string. then Maths it from mathJS library. 
    case EQUAL: {
      let states = state.history + state.display;
      let maths = math.eval(states);

      if (state.prevOp === "equal") {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          history: math.round(maths, 4).toString(),
          display: math.round(maths,4).toString(),
          accumulated: maths.toString(),
          prevOp: "equal",
        }
      }
    }

    default:
      return state;
  }

}