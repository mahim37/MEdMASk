import React, { useState } from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Sign up
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello User</h2>
            <Link className="nav-links-new" to="/dashboard">
              <button>Sign up as Patient</button>
            </Link>
            <Link className="nav-links-new" to="/signupdoctor">
              <button>Sign up as Doctor</button>
            </Link>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
