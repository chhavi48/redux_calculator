import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import store from "./store/store";
import Calculator from "./Calculator";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>
  , document.getElementById("root")
);
