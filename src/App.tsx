import React, { Component } from "react";
import logo from "./logo.svg";
import Accordion from "./components/MyAccordion";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion separator=">" separatorColour="#FFA500">
          root
          <a>category 1</a>
          <a>category 2</a>
          <div>category 3</div>
          <p>category 4</p>
          <p>category 5</p>
        </Accordion>
      </div>
    );
  }
}

export default App;
