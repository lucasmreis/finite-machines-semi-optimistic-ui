import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import SemiOptimisticUi from "./semi-optimistic-ui";

function App() {
  return (
    <div className="App">
      <SemiOptimisticUi />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
