import React from 'react';
import "../css/TextField.css";

export const TextField = ({ ...props }) => {
  return (
    <div className="mb-2">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className={`form-control shadow-none`}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}
