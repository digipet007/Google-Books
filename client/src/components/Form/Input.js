import React from "react";
import "./Form.css";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control search-bar" {...props} />
    </div>
  );
}
