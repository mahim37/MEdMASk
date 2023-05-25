import React, { useState,useEffect } from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleScrollLock = () => {
    if (modal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  };
  useEffect(() => {
    handleScrollLock();
  }, [modal]);

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Get Started
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="userhello">
              <h2>Hello User</h2>
            </div>
            <div>
              <Link className="nav-links-new" to="/dashboard">
                Sign up as Patient
              </Link>
              <Link className="nav-links-new" to="/signupdoctor">
                Sign up as Doctor
              </Link>
              <button className="close-modal" onClick={toggleModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
