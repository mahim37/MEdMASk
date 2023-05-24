import React from 'react';
import './Agreed.css';
import img1 from '../mask.png';

const Agreed = () => {
  return (
    <>
      <h1 className="abouth">secure your health. own your data.</h1>
      <div className="agreed">
        <div className="textsect slide-in-left">
          <p className="para">
            Tired of the headache-inducing task of managing your medical
            documents? We've created a platform that utilizes the latest in
            blockchain technology to protect your data from unauthorized access,
            while also giving you the freedom to share it on your terms.
          </p>
        </div>
        <div className="imgsect slide-in-right">
          <img className="aboutwebsite" src={img1} alt="Mask" />
        </div>
      </div>
    </>
  );
};

export default Agreed;
