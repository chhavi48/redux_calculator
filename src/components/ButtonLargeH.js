import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplay } from "../actions/actions";
import { addition } from "../actions/actions";
import { equal } from "../actions/actions";
import "../css/buttons.css";

class ButtonLargeH extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.display(this.props.value);
  }

  render() {
    return (
      <button
        id={this.props.id}
        className="button-large-h"
        value={this.props.value}
        onClick={this.handleClick}
      >
        {this.props.button}
      </button>
    );
  }
}

//export default ButtonLargeH;

const mapDispatchToProps = dispatch => ({
  display: display => dispatch(updateDisplay(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(ButtonLargeH);