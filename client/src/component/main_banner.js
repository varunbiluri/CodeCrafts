import React, { useState, useEffect } from "react";
import './main_banner.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useProblem } from "./ProblemContent";

function MainBanner() {
  const [problems, setProblems] = useState([]);
  const { setSelectedProblem } = useProblem();

  useEffect(() => {
    axios.get("http://localhost:3000/codes/see")
      .then((res) => {
        setProblems(res.data);
        this.fetchCodeData();
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleShowDetails = (problem) => {
    setSelectedProblem(problem);
  };

  return (
    <div className='main_banner'>
      {problems.map((problem) => (
        <div className="main_banner_box" key={problem.id}>
          <div className="main_banner_box_text">
            <h2>{problem.problem}</h2>
            <h3 className="main_banner_box_desc">{problem.problemDescription}</h3>
          </div>
          <div className="main_banner_box_button">
            <Link to="/editor">
              <button className="main_banner_box_solve" onClick={() => handleShowDetails(problem)}>Solve Now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainBanner;
