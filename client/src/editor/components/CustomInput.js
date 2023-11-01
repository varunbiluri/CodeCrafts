import React from "react";
import './custom-input.css';
const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        cols="30"
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className="custom-input"
      ></textarea>
    </>
  );
};

export default CustomInput;
