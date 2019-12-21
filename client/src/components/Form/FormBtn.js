import React from "react";
import "./Form.css";

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success search-button">
      {props.children}
    </button>
  );
}
