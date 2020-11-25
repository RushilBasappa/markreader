import React, { useState } from "react";
import SplitPane, { Pane } from "react-split-pane";
import "./App.css";
import { Editor, Preview } from "./components";
import { content } from "./content";

function App() {
  const [editorValue, setEditorValue] = useState(content);
  return (
    <SplitPane split="vertical" defaultSize="50%" minSize={100}>
      <Pane initialSize="50%" className="h-100">
        <Editor value={editorValue} setValue={setEditorValue} />
      </Pane>
      <Pane initialSize="50%" className="h-100">
        <Preview value={editorValue} />
      </Pane>
    </SplitPane>
  );
}

export default App;
