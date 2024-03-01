// Modal.js

import React from "react";

const ThirdModal = ({ isOpen, onCancel, onSave, p }) => {
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
          <button onClick={onSave}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ThirdModal;
