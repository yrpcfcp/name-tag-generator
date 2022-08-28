import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag"

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Carlos"/>
    <NameTag name="Ana"/>
    <NameTag name="Shirley"/>
    <NameTag name="Maria"/>
    <NameTag name="Thomas"/>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);