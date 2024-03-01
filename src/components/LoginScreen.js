import React, { useState } from "react";
import Heading from "./atoms/Heading";
import CustomInput from "./atoms/CustomInput";
import CustomButton from "./atoms/CustomButton";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve user data from local storage
    const userDataString = localStorage.getItem("userData");
    if (!userDataString) {
      alert("No user data found. Please sign up first.");
      return;
    }

    const userData = JSON.parse(userDataString);
    const user = Object.values(userData).find((user) => user.email === email);

    if (!user || user.password !== password) {
      alert("Invalid email or password.");
      return;
    }

    // Successful login
    alert("Login successful!");

    // Store the logged-in user's email in local storage or state
    localStorage.setItem("loggedInUserEmail", email);

    navigate("/login/login-success");

    // Additional logic after successful login, e.g., redirecting user to another page
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Heading children="Login" />
      </div>
      <div className="formStyle">
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <CustomInput
              type="email"
              label="Email: "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <CustomInput
              type="password"
              label="Password: "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <CustomButton btnTitle="Login" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
