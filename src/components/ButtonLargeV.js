import React, { Component } from "react";
import { connect } from "react-redux";
import { addition } from "../actions/actions";
import { equal } from "../actions/actions";
import { updateDisplay } from "../actions/actions";
import "../css/buttons.css";

class ButtonLargeV extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.id === "add") {
      this.props.add(this.props.button)
    } else if (this.props.id === "equals") {
      this.props.equal(this.props.display);
    }
  }

  render() {
    return (
      <button id={this.props.id} 
      className="button-large-v"
      onClick={this.handleClick}
      >
      {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateDisplay: display => dispatch(updateDisplay(display)),
  add: display => dispatch(addition(display)),
  equal: display => dispatch(equal(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonLargeV);