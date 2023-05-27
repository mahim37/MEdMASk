import React, { useState } from 'react';
import { ethers } from 'ethers';
import HealthNFT from "../HealthNFT.json";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";

const HospitalInterface = () => {
  const [patientAddress, setPatientAddress] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isSensitive, setIsSensitive] = useState(false);

  async function OnChangeFile(e) {
    var file = e.target.files[0];
    //check for file extension
    try {
      // upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        setFileURL(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during file upload", e);
    }
  }
 



  const [date, setDate] = useState('');
  const [prescribedMedication, setPrescribedMedication] = useState('');
  const [doctorName, setDoctorName] = useState('');

  const [fileURL, setFileURL] = useState(null);
  const [message, updateMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [formParams, updateFormParams] = useState({
	name: "",
	sex: "",
	age: "",
	phone: "",
	price: "",
  });

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
    	<br></br>
    	<label style={labelStyle}>Diagnosis:</label>
      	<input
        	type="text"
        	value={diagnosis}
        	onChange={(e) => setDiagnosis(e.target.value)}
        	style={inputStyle}
        	placeholder="Enter Diagnosis"
      	/>
    	<br></br>
    	<label style={labelStyle}>Date:</label>
      	<input
        	type="date"
        	value={date}
        	onChange={(e) => setDate(e.target.value)}
        	style={inputStyle}
      	/>
    	<br></br>
    	<label style={labelStyle}>Prescribed Medication:</label>
      	<input
        	type="text"
        	value={prescribedMedication}
        	onChange={(e) => setPrescribedMedication(e.target.value)}
        	style={inputStyle}
        	placeholder="Enter Prescribed Medication"
      	/>
    	<br></br>
    	<label style={labelStyle}>Doctor Name:</label>
      	<input
        	type="text"
        	value={doctorName}
        	onChange={(e) => setDoctorName(e.target.value)}
        	style={inputStyle}
        	placeholder="Enter Doctor Name"
      	/>
    	<br></br>
    	<label style={checkboxLabelStyle}>
        	<input
          	type="checkbox"
          	checked={isSensitive}
          	onChange={(e) => setIsSensitive(e.target.checked)}
          	style={checkboxStyle}
        	/>
        	Sensitive
      	</label>
      	<br></br>
      
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Upload Image:</label>
          <input
            type="file"
            onChange={OnChangeFile}
            
          />
      
      </div>

      	<button style={buttonStyle} onClick={handleAppendDiagnosis}>
        	Append Diagnosis
      	</button>
    </div>

  </div>

  )
}


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px',
  backgroundColor: '#F5F5F5',
  border: '1px solid #e2e2e2',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: '600',
  marginBottom: '40px',
  color: '#333',
};

// const inputContainerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   width: '100%',
//   marginBottom: '20px',
// };

const labelStyle = {
  fontSize: '18px',
  fontWeight: '500',
  marginBottom: '10px',
  color: '#333',
};

const inputStyle = {
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
};

const checkboxStyle = {
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#008CBA',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
};



// const inputStyle = {
//   padding: '10px',
//   marginBottom: '20px',
//   borderRadius: '5px',
//   border: '1px solid #ccc',
//   fontSize: '16px',
//   maxWidth: '300px', // this line
// };

// or

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '300px', // this line
  marginBottom: '20px',
};






export default HospitalInterface;
