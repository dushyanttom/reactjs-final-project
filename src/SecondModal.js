// Modal.js

import React from "react";

const SecondModal = ({ isOpen, onCancel, onConfirm, p }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{p}</p>
        <div className="button-container">
          <label>File Description</label>
          <span style={{ marginRight: "10px" }}></span>
          <input type="text" placeholder="Enter Description" />
        </div>
        <br />
        <div className="button-container">
          <label>File Upload</label>
          <span style={{ marginRight: "10px" }}></span>
          <input type="file" />
        </div>
        <br />
        <div className="button-container">
          <button onClick={onConfirm}>Upload Now</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
