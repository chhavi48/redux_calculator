import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { subtraction } from "../actions/actions";
import { multiplication } from "../actions/actions";
import { division } from "../actions/actions";
import "../css/buttons.css";

class ButtonSmall extends Component {
  constructor(props) {
    super(props);
    this.handleClicks = this.handleClicks.bind(this);
  }
  // for each click, corresponding action is dispatched. 
  handleClicks(e) {
    if (this.props.id === "clear") {
      this.props.clear();
    } else if (this.props.id === "subtract") {
      this.props.subtract(this.props.display);
    } else if (this.props.id === "multiply") {
      this.props.multiply(this.props.display);
    } else if (this.props.id === "divide") {
      this.props.divide(this.props.display);
    } else {
      this.props.updateDisplay(this.props.button);
    }
  }

  render() {
    return (
      <button
        id={this.props.id}
        value={this.props.value}
        className="button-small"
        onClick={this.handleClicks}
      >
        {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDisplay: display => dispatch(updateDisplay(display)),
  subtract: display => dispatch(subtraction(display)),
  multiply: display => dispatch(multiplication(display)),
  divide: display => dispatch(division(display)),
  clear: display => dispatch(clearDisplay(display))
});



export default connect(
  null,
  mapDispatchToProps
)(ButtonSmall);