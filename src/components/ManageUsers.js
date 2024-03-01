import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import Header from "./Header";

const ManageUsers = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // To keep track of the user to delete
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Retrieve data from local storage
    const localStorageData = localStorage.getItem("userData");

    // Parse the data into an object
    const parsedData = JSON.parse(localStorageData);

    // Set the parsed data to state
    setData(parsedData);
  }, []);

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = { ...data };
    const userId = Object.keys(updatedData).find(
      (key) =>
        updatedData[key].fullName === selectedUser.fullName &&
        updatedData[key].email === selectedUser.email
    );
    delete updatedData[userId];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    setData(updatedData);
    setShowModal(false);
    alert(`${selectedUser.fullName} deleted`);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      {Object.keys(data).length > 0 && (
        <>
          <h2>Users</h2>
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => (
                  <tr key={key}>
                    <td>{data[key].fullName}</td>
                    <td>{data[key].email}</td>
                    <td>
                      <Link to={`/edit/${key}`}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(data[key])}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <Modal
        paragraph="Are you sure you want to delete this user?"
        isOpen={showModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ManageUsers;
