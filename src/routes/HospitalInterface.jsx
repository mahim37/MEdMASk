import React, { useState } from 'react';

const HospitalInterface = () => {
  const [patientAddress, setPatientAddress] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isSensitive, setIsSensitive] = useState(false);

  const handleRequestData = () => {
    // Logic for handling request data
  };

  const handleAppendDiagnosis = () => {
    // Logic for handling append diagnosis
  };

  return (
    <div style={containerStyle}>
        <br></br>
      <h1 style={titleStyle}>Hospital Interface</h1>
      <br></br>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Patient's Wallet Address:</label>
        <input
          type="text"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
          style={inputStyle}
          placeholder="Enter Patient's Wallet Address"
        />
        <button style={buttonStyle} onClick={handleRequestData}>
          Request Data
        </button>
      </div>
      <br></br>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Diagnosis:</label>
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          style={inputStyle}
          placeholder="Enter Diagnosis"
        />
        <label style={checkboxLabelStyle}>
          <input
            type="checkbox"
            checked={isSensitive}
            onChange={(e) => setIsSensitive(e.target.checked)}
            style={checkboxStyle}
          />
          Sensitive
        </label>
        <button style={buttonStyle} onClick={handleAppendDiagnosis}>
          Append Diagnosis
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const labelStyle = {
  marginRight: '10px',
};

const inputStyle = {
  padding: '8px',
  marginRight: '10px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px',
};

const checkboxStyle = {
  marginRight: '5px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#85CDFD',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
};

export default HospitalInterface;
