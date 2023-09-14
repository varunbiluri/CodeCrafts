import React, { createContext, useState, useContext } from "react";

const ProblemContext = createContext();

export const ProblemProvider = ({ children }) => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  return (
    <ProblemContext.Provider value={{ selectedProblem, setSelectedProblem }}>
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblem = () => {
  return useContext(ProblemContext);
};
