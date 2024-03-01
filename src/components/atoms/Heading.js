import React from "react";

const Heading = ({ children, heading }) => {
  return (
    <div>
      <h1>{children}</h1>
      <h3>{heading}</h3>
    </div>
  );
};

export default Heading;
