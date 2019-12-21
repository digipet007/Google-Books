import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron text-center">
      <div className="overlay"></div>
      <div className="background-image"></div>
      {children}
    </div>
  );
}

export default Jumbotron;
