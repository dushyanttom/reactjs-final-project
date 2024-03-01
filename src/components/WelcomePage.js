import React from "react";
import Header from "./Header";

const WelcomePage = () => {
  // Retrieve the logged-in user's email from local storage or state
  const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

  return (
    <>
      <Header />
      <div style={{ margin: "30px" }}>
        <div className="styledContainer">
          <h1>Login Successful</h1>
        </div>
        <div className="styledContainer">
          <p>{`Welcome ! ${loggedInUserEmail}`}</p>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
