import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
function Modal() {
  const { modalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${modalOpen ? "modal-overlay show-modal" : "modal-overlay "}`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
