import React from "react";
import "./Form.css";
function FormControl({ label, title = label, children }) {
  return (
    <div className="form-item">
      <label htmlFor={label}>{title}</label>
      {children}
    </div>
  );
}

export default FormControl;
