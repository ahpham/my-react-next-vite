"use client"
import React, { useState } from 'react';
import { Button, TextArea } from '@carbon/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import axios from 'axios';
import './globals.scss';

SyntaxHighlighter.registerLanguage('json', json);

const RequestResponseComponent: React.FC = () => {
  const [request, setRequest] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const sendRequest = async () => {
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', JSON.parse(request));
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    }
  };

  const clearResponse = () => {
    setResponse('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Request</h3>
      <TextArea
        labelText="Request JSON"
        value={request}
        onChange={(e) => setRequest(e.target.value)}
        rows={10}
      />
      <SyntaxHighlighter language="json" style={docco}>
        {request}
      </SyntaxHighlighter>
      <div style={{ margin: '20px 0' }}>
        <Button onClick={sendRequest} style={{ marginRight: '10px' }}>Send Request</Button>
        <Button onClick={clearResponse} kind="secondary">Clear Response</Button>
      </div>
      <h3>Response</h3>
      <SyntaxHighlighter language="json" style={docco}>
        {response}
      </SyntaxHighlighter>
    </div>
  );
};

export default RequestResponseComponent;
