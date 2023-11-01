import React, { useEffect } from 'react';

import Navbar from './navbar';
import './editor.css';
import { useProblem } from './ProblemContent';
import Landing from '../editor/components/Landing';

function MonacoEditorComponent() {
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
          <Landing />
        </div>
      </div>
    
  );
}

export default MonacoEditorComponent;