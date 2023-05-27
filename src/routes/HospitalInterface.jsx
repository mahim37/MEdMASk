import React, { useState } from 'react';
import { ethers } from 'ethers';
import HealthNFT from "../HealthNFT.json";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";

const HospitalInterface = () => {
  const [patientAddress, setPatientAddress] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [isSensitive, setIsSensitive] = useState(false);
  const [date, setDate] = useState('');
  const [prescribedMedication, setPrescribedMedication] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [fileURL, setFileURL] = useState(null);
  const [message, updateMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [formParams, updateFormParams] = useState({
    name: '',
    sex: '',
    age: '',
    phone: '',
    price: '',
  });

  const handleAppendDiagnosis = () => {
    // Logic for handling append diagnosis
  };

  const onChangeFile = async (e) => {
    var file = e.target.files[0];
    // Check for file extension
    try {
      // Upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log('Uploaded image to Pinata: ', response.pinataURL);
        setFileURL(response.pinataURL);
      }
    } catch (e) {
      console.log('Error during file upload', e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-100 border border-gray-300 rounded shadow">
      <h1 className="text-3xl font-bold mb-8">Hospital Portal</h1>
      <div className="grid grid-cols-2 gap-8 max-w-md">
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-lg font-medium">Patient's Wallet Address:</label>
            <input
              type="text"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Enter Patient's Wallet Address"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Diagnosis:</label>
            <input
              type="text"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Enter Diagnosis"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-lg font-medium">Prescribed Medication:</label>
            <input
              type="text"
              value={prescribedMedication}
              onChange={(e) => setPrescribedMedication(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Enter Prescribed Medication"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Doctor Name:</label>
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Enter Doctor Name"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isSensitive}
              onChange={(e) => setIsSensitive(e.target.checked)}
              className="mr-2"
            />
            <span className="text-lg">Sensitive</span>
          </div>
        </div>
        <div className="col-span-2" style={{display:'flex'}}>
          <label className="text-lg font-medium">Upload Image:</label>
          <input type="file" onChange={onChangeFile} />
        </div>
      </div>
      <button
        className="mt-8 py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        onClick={handleAppendDiagnosis}
      >
        Append Diagnosis
      </button>
    </div>
  );
};

export default HospitalInterface;
