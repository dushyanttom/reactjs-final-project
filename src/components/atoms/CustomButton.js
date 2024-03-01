import React from "react";

const CustomButton = ({ btnTitle, onClick }) => {
  return (
    <div>
      <button
        style={{
          width: 100,
          height: 30,
          borderRadius: 25,
        }}
        onClick={onClick}
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default CustomButton;
