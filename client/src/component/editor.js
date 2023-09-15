import React, { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Navbar from './navbar';
import './editor.css';
import axios from 'axios'; // Import Axios
import { useProblem } from './ProblemContent';

function MonacoEditorComponent() {
  const fontSize = '25px';
  const options = {
    fontSize: fontSize,
  };

  const { selectedProblem } = useProblem();
  const [code, setCode] = useState(''); // State to store code

  useEffect(() => {
    console.log(selectedProblem);
  }, [selectedProblem]);

  // Function to send code to the server
  const submitCode = () => {
    // Send the code to your server for saving
    axios.post('http://localhost:3000/editor/add', { code })
      .then((response) => {
        console.log('Code saved successfully:', response.data);
        // You can handle success actions here
      })
      .catch((error) => {
        console.error('Error saving code:', error);
        // Handle error scenarios here
      });
  };

  return (
    <div>
      <Navbar />
      <div className="editor">
        <div className='editor-problem'>
          <h1 id="h1">{selectedProblem?.problem}</h1>
          <p id="p">{selectedProblem?.problemDescription}</p>
     
          <h1 id="h1"> Input: </h1>
          <p id="p">{selectedProblem?.input}</p>
          <h1 id="h1"> Output: </h1>
          <p id="p">{selectedProblem?.output}</p>
        </div>
        <div className="editor_ide">
          <MonacoEditor
            width="900"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code} // Bind the code to the editor
            options={options}
            onChange={(newCode) => setCode(newCode)} // Update code state on change
          />
          <br />
          <button id="button" type="button" onClick={submitCode}>Submit Code</button>
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





