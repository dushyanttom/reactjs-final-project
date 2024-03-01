import React from "react";
import Heading from "./atoms/Heading";
import CustomButton from "./atoms/CustomButton";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <div className="styledContainer">
        <Heading children="Welcome to Users Module" />
      </div>
      <div className="styledContainer">
        <Heading heading="Existing Users" />
      </div>
      <div className="styledContainer">
        <Link to="login">
          <CustomButton btnTitle="Login" />
        </Link>
      </div>
      <div className="styledContainer">
        <Heading heading="New Users" />
      </div>
      <div className="styledContainer">
        <Link to="signup">
          <CustomButton btnTitle="Sign Up" />
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
