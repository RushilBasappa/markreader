import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

const Preview = ({ value }) => {
  return (
    <ReactMarkdown
      children={value}
      plugins={[gfm]}
      className="preview-pane"
      allowDangerousHtml={true}
      renderers={{ code: CodeBlock }}
    />
  );
};

export default Preview;
