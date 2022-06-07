import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/keypad.css";
import ButtonSmall from "./ButtonSmall";
import ButtonLargeV from "./ButtonLargeV";
import ButtonLargeH from "./ButtonLargeH";
import "../css/buttons.css";

class Keypad extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="keypad">
        <div className="button-group-3x4">
          <div className="button-row-3x1">
            <ButtonSmall button={"C"} id={"clear"} type={'clear'} />
            <ButtonSmall button={"/"} id={"divide"} type={'operator'} display={this.props.display} />
            <ButtonSmall button={"*"} id={"multiply"} type={'operator'} display={this.props.display} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={"7"} id={"seven"} value={'7'} type={'num'} />
            <ButtonSmall button={"8"} id={"eight"} value={'8'} type={'num'} />
            <ButtonSmall button={"9"} id={"nine"} value={'9'} type={'num'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={"4"} id={"four"} value={'4'} type={'num'} />
            <ButtonSmall button={"5"} id={"five"} value={'5'} type={'num'} />
            <ButtonSmall button={"6"} id={"six"} value={'6'} type={'num'} />
          </div>
          <div className="button-row-3x1">
            <ButtonSmall button={"1"} id={"one"} value={'1'} type={'num'} />
            <ButtonSmall button={"2"} id={"two"} value={'2'} type={'num'} />
            <ButtonSmall button={"3"} id={"three"} value={'3'} type={'num'} />
          </div>
        </div>
        <div className="button-row-4x1">
          <ButtonLargeH button={"0"} id={"zero"} value={'0'} type={'num'} />
          <ButtonSmall button={"."} id={"decimal"} value={'.'} display={this.props.display} type={'decimal'} />
        </div>
        <div className="button-col-1x5">
          <ButtonSmall button={"-"} id={"subtract"} display={this.props.display} type={'operator'} />
          <ButtonLargeV button={"+"} id={"add"} display={this.props.display} type={'operator'} />
          <ButtonLargeV button={"="} id={"equals"} display={this.props.display} type={'equals'} />
        </div>
      </div>
    );
  }
}

export default Keypad;


