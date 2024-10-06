import React from "react";

const Button = ({ value, handleClick }) => {
  return (
    <button onClick={() => handleClick(value)} className="button">
      {value}
    </button>
  );
};

export default Button;
