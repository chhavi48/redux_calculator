import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { getDisplay } from "./selectors/Selectors";
import "./css/calculator.css";

class Calculator extends Component {

  render() {
    return (
      <div className="calculator-body">
        <div className="display-block skewed-shadow">
          <Display
            display={this.props.display}
          />
        </div>
        <div className="keypad-block">
          <Keypad
            display={this.props.display}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const displayValue = getDisplay(state);
  return ({
    display: displayValue,
  });
};

export default connect(
  mapStateToProps,
  null
)(Calculator);