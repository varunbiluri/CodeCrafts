import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Navbar from './navbar';
import './editor.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters

function MonacoEditorComponent() {
  const fontSize = '25px';
  const options = {
    fontSize: fontSize,
  };

  const [problem, setProblem] = useState({
    problem: '',
    problemDescription: '',
    input: '',
    output: '',
  });

  const { problemId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/codes/see/${problemId}`)
      .then((res) => {
        const { problem, problemDescription, input, output } = res.data;
        setProblem({
          problem,
          problemDescription,
          input,
          output,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [problemId]); 

  return (
    <div>
      <Navbar />
      <div className="editor">
        <div className='editor-problem'>
          <h1 id="h1">{problem.problem}</h1>
          <p id="p">{problem.problemDescription}</p>
     
          <h1 id="h1"> Input: </h1>
          <p id="p">{problem.input}</p>
          <h1 id="h1"> Output: </h1>
          <p id="p">{problem.output}</p>
        </div>
        <div className="editor_ide">
          <MonacoEditor
            width="900"
            height="600"
            language="javascript"
            theme="vs-dark"
            value="Start Coding Here"
            options={options}
          />
          <br />
          <button id="button" type="submit">Submit Code</button>
          <br />
          <br />
          <div className='results'>
            <h2>Expected Output</h2>
            <h6>---------</h6>
            <h6>---------</h6>
            <h2>Your Output</h2>
            <h6>---------</h6>
            <h6>---------</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonacoEditorComponent;
