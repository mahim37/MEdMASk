import Navbar from "../components/Navbar";
import Modal from "./Modal";
import "./Modal.css";
function Company() {
    return (
        <>
        <Navbar/>
        <div className="thodasahi">
        <div className="tc">
            <h1 className="tandc">Terms & Conditions</h1>
            <ul className="tc">
                <li>✦  MedMask will collect and store your medical history information in a secure manner. We will only share your information with your doctor or healthcare provider when you provide us with their contact information.</li>
                <li>✦  Your medical history information will be converted into a non-fungible token (NFT) and stored on a blockchain for security purposes.</li>
                <li>✦  The NFT containing your medical history information will be accessible only to your doctor or healthcare provider. We will send a copy of the master NFT to your doctor or healthcare provider's designated wallet address.</li>
                <li>✦  You have the right to access and review your medical history information at any time. You can also request that we delete your medical history information from our database.</li>
                <li>✦  MedMask does not provide medical advice, diagnosis, or treatment. We are not liable for any medical decisions made by your doctor or healthcare provider based on your medical history information.</li>
                <li>✦  You are responsible for ensuring the accuracy of your medical history information. We are not liable for any errors or omissions in your medical history information.</li>
                <li>✦  MedMask reserves the right to modify or terminate our services at any time. We will notify you of any changes or updates to our terms and conditions or privacy policy.</li>
                <li>✦  You agree to indemnify and hold our company harmless from any claims or damages arising from your use of our services.</li>
            </ul>
        </div>
        <Modal/>
        </div>
        </>
    )
}
export default Company;