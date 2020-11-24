import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import "./App.css";

function App() {
  return (
    <SplitPane split="vertical" defaultSize="50%" minSize={100}>
      <Pane initialSize="50%">Left</Pane>
      <Pane initialSize="50%">Right</Pane>
    </SplitPane>
  );
}

export default App;
