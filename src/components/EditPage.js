import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const EditPage = () => {
  const { key } = useParams(); // Get the user ID from URL params
  const [fullName, setFullName] = useState(""); // State for full name
  const [email, setEmail] = useState(""); // State for email

  useEffect(() => {
    const fetchUserData = () => {
      // Retrieve existing user data from local storage
      const localStorageData = JSON.parse(localStorage.getItem("userData"));
      if (localStorageData && localStorageData[key]) {
        const { fullName, email } = localStorageData[key];
        // Set the full name and email in component state
        setFullName(fullName);
        setEmail(email);
      }
    };

    fetchUserData();
  }, [key]);

  const handleFullNameChange = (event) => {
    // Update the full name in state
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    // Update the email in state
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve existing user data from local storage
    const localStorageData = JSON.parse(localStorage.getItem("userData"));
    if (localStorageData && localStorageData[key]) {
      // Update the fullName and email fields in the existing user data
      localStorageData[key] = { ...localStorageData[key], fullName, email };
      // Save the updated user data back to local storage
      localStorage.setItem("userData", JSON.stringify(localStorageData));
      alert("Changes saved successfully.");
    }
  };

  return (
    <div>
      <Header />
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPage;
