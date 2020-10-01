import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./main/Main";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
      </header>
      <Main props={{ ...props }} />
    </div>
  );
}

export default App;
