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
      <img src="https://media.istockphoto.com/id/1204743045/photo/medical-technology-concept-remote-medicine-electronic-medical-record.jpg?s=612x612&w=0&k=20&c=WASRAVnJRRItvzWOo8bFgtTamBAt3uIq52GTEaiK-GE="></img>
      <br></br>
      <button onClick={toggleModal} class="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
<span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
<span class="relative z-20 flex items-center text-sm">
<svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
Get Started
</span>
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
