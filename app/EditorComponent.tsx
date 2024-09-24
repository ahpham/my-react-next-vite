
"use client";
import React, { useState } from 'react';
//import './EditorComponent.scss';
import { TextArea } from '@carbon/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from '@carbon/icons-react';
import './globals.scss';

const EditorComponent: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="editor-container">
      <TextArea
        labelText="Edit JSON/YAML"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        rows={10}
      />
      <div className="code-container">
        <SyntaxHighlighter language="json" style={prism}>
          {content}
        </SyntaxHighlighter>
        <Copy className="copy-icon" onClick={handleCopy} />
      </div>
    </div>
  );
};

export default EditorComponent;
