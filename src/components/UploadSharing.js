import React, { useState } from "react";
import Modal from "../Modal";
import Header from "./Header";

const UploadSharing = () => {
  const [selectedUser, setSelectedUser] = useState(""); // State to store selected user
  const [sharedUsers, setSharedUsers] = useState([]); // State to store shared users
  const [userToRemove, setUserToRemove] = useState(""); // State to store the user to remove
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle adding a user to the shared list
  const addSharedUser = () => {
    if (selectedUser.trim() === "") return; // Require a selected user

    // Check if the user is already in the shared list
    if (!sharedUsers.includes(selectedUser)) {
      setSharedUsers([...sharedUsers, selectedUser]);
    }

    // Clear selected user after adding to the shared list
    setSelectedUser("");
  };

  // Function to set the user to remove and open the modal
  const confirmRemoveUser = (user) => {
    setUserToRemove(user);
    setShowModal(true);
  };

  // Function to handle removing a user from the shared list
  const removeSharedUser = () => {
    setSharedUsers(sharedUsers.filter((user) => user !== userToRemove));
    setShowModal(false); // Close the modal after removing the user
  };

  // Function to close the modal without removing the user
  const cancelRemoveUser = () => {
    setShowModal(false);
  };

  // Mock data for user list (replace this with your actual user list)
  const userList = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    // Add more users as needed
  ];

  return (
    <div>
      <Header />
      <div style={{ margin: "10px" }}>
        {/* Heading for the selected document */}
        <h2>Add Sharing</h2>

        {/* List of shared users */}
        <h3>Choose User:</h3>
        <ul>
          {sharedUsers.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => confirmRemoveUser(user)}>Remove</button>
            </li>
          ))}
        </ul>

        {/* Dropdown menu to select a user */}
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select a user</option>
          {userList.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        {/* Button to add the selected user to the shared list */}
        <button onClick={addSharedUser}>Add Share</button>

        {/* Modal */}

        <Modal
          paragraph="Are you sure"
          isOpen={showModal}
          onCancel={cancelRemoveUser}
          onConfirm={removeSharedUser}
        />
      </div>
    </div>
  );
};

export default UploadSharing;
