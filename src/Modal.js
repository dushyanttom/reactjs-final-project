// Modal.js

import React from "react";

const Modal = ({ isOpen, onCancel, onConfirm, paragraph, src, alt }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{paragraph}</p>
        <div className="button-container">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
