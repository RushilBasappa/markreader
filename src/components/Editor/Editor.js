import React from "react";
import CodeMirror from "react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/xml/xml";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/monokai.css";
import "./Editor.css";

const Editor = ({ value, setValue }) => {
  const options = {
    autofocus: true,
    cursorBlinkRate: 500,
    lineNumberFormatter: (lineNumber) => `${lineNumber}|`,
    lineNumbers: true,
    lineWiseCopyCut: true,
    mode: "markdown",
    theme: "monokai",
  };
  return (
    <CodeMirror
      value={value}
      options={options}
      height="100%"
      onChange={(val) => setValue(val)}
    />
  );
};

export default Editor;
