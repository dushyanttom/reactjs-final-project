import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import useNavigate hook for redirection
import Heading from "./atoms/Heading";
import CustomInput from "./atoms/CustomInput";
import CustomButton from "./atoms/CustomButton";

const SignUp = () => {
  // State variables for form fields and validation
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are valid
    if (isFormValid) {
      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Check if the email is already registered
      const existingDataString = localStorage.getItem("userData");
      const existingData = existingDataString
        ? JSON.parse(existingDataString)
        : {};
      const isAlreadyRegistered = Object.values(existingData).some(
        (user) => user.email === email
      );
      if (isAlreadyRegistered) {
        alert("You are already registered");
        return;
      }

      // Save data to local storage
      saveDataToLocal();
    } else {
      alert("Please fill in all fields correctly");
    }
  };

  // Function to save data to local storage
  const saveDataToLocal = () => {
    // Retrieve existing data from local storage
    const existingDataString = localStorage.getItem("userData");
    let existingData = existingDataString ? JSON.parse(existingDataString) : {};

    // Generate a unique key for the new set of data (e.g., using a timestamp)
    const timestamp = new Date().getTime();
    const newDataKey = `userData_${timestamp}`;

    // New data to be stored
    const newData = {
      fullName,
      email,
      password,
    };

    // Merge new data with existing data
    existingData[newDataKey] = newData;

    // Save merged data to local storage
    localStorage.setItem("userData", JSON.stringify(existingData));

    // Set registration success state to true
    setRegistrationSuccess(true);
  };

  // Function to handle input change and validate form
  const handleInputChange = (inputName, value) => {
    switch (inputName) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }

    const isValid =
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      /^\S+@\S+\.\S+$/.test(email) && // Basic email format validation
      password.trim() !== "" &&
      confirmPassword.trim() !== "";

    setIsFormValid(isValid);
  };

  // If registration is successful, render success message and link to home page
  if (registrationSuccess) {
    return (
      <div style={{ margin: "30px" }}>
        <div className="styledContainer">
          <Heading children="Registration Successful" />
        </div>
        <div className="styledContainer">
          <p>Thank you for your registration</p>
        </div>
        <div>
          <Link className="styledContainer" to="/">
            Click to return to home page
          </Link>
        </div>
      </div>
    );
  }

  // Render registration form if registration is not yet successful
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
        <Heading children="Register" />
      </div>
      <div className="formStyle">
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "10px" }}>
            <CustomInput
              label="Full Name: "
              type="text"
              value={fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <CustomInput
              label="Email: "
              type="email"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <CustomInput
              label="Password: "
              type="password"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <CustomInput
              label="Confirm Password: "
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <CustomButton btnTitle="Register" disabled={!isFormValid} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
