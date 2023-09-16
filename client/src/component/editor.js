import React, { useEffect } from 'react';
import Navbar from './navbar';
import './editor.css';
import axios from 'axios';

import { useProblem } from './ProblemContent';


function MonacoEditorComponent() {

  const fontSize = '15px';
  const options = {
    fontSize: fontSize,
    minimap: {
      enabled: false, // Disable the minimap
    },
    automaticLayout: true, // Enable automatic layout
    wordWrap: 'on', // Enable word wrap
  };

  const { selectedProblem } = useProblem();
  const [code, setCode] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript'); // Default language
  // const { user } = useAuth();
  const [expectedOutput, setExpectedOutput] = useState('');
const [yourOutput, setYourOutput] = useState('');


  useEffect(() => {
    console.log(selectedProblem);
  }, [selectedProblem]);

  const runCode = () => {
    try {
      // Clear previous output
      setExpectedOutput('');
      setYourOutput('');

      // Send code to the Flask API for execution
      axios
        .post('http://localhost:5000/execute', {
          code: code,
          language: selectedLanguage,
        })
        .then((res) => {
          // Handle the response from the Flask API
          if (res.data.error) {
            console.error(res.data.error);
          } else {
            setYourOutput(res.data.result);
          }
        })
        .catch((err) => {
          console.error(err);
          // Handle errors from the Flask API
        });
    } catch (error) {
      console.error(error);
      // Handle errors in the client-side code
    }
  };

  const submitCode = () => {
    axios
      .post('http://localhost:3000/editor/add', {
        usercode: code,
        language: selectedLanguage,
      })
      .then((res) => {
        console.log(res);
        alert('Solution Saved Successfully');
        setCode('');
        fetchUserCode();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  

  const fetchUserCode = () => {
    axios
      .get('http://localhost:3000/editor/add')
      .then((res) => {
        // Process the fetched user data if needed
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Function to handle language selection
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };



  const { selectedProblem } = useProblem();
  useEffect(() => {
    console.log(selectedProblem);
  }, [selectedProblem]);

  return (
    <div>
      <Navbar />
      <div className="editor">
        <div className="editor-problem">
          <h1 id="h1">{selectedProblem?.problem}</h1>
          <p id="p">{selectedProblem?.problemDescription}</p>

          <h1 id="h1"> Input: </h1>
          <p id="p">{selectedProblem?.input}</p>
          <h1 id="h1"> Output: </h1>
          <p id="p">{selectedProblem?.output}</p>
        </div>
        <div className="editor_ide">

          {/* Dropdown for selecting the programming language */}
          <div className="language-select">
            <label htmlFor="language">Select a language:</label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="c">C</option>
              <option value="java">Java</option>
            </select>
          </div>

          <MonacoEditor
            width="900"
            height="600"
            language={selectedLanguage}
            theme="vs-dark"
            value={code}
            options={options}
            onChange={(newCode) => setCode(newCode)}
          />
          <br />
          <button id='button' type='button' onClick={runCode}>Run</button>
          <button id="button" type="button" onClick={submitCode}>
            Submit Code
          </button>
          <br />
          <br />
          <div className="results">
          <h2>Expected Output</h2>
          <p>{expectedOutput}</p>
          <h2>Output</h2>
          <p>{yourOutput}</p>
          </div>          

        </div>
      </div>
    </div>
  );
}

export default MonacoEditorComponent;
