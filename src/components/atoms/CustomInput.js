import React from "react";

const CustomInput = ({ type, label, onChange, value }) => {
  return (
    <div>
      <label
        style={{
          width: "200px",
          textAlign: "right",
        }}
      >
        {label}
      </label>
      <input type={type} value={value} onChange={onChange}></input>
    </div>
  );
};

export default CustomInput;
