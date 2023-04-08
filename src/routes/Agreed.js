import "./Agreed.css";
import img1 from "./Agreed.png";
function Agreed() {
    return (
        <div className="agreed">
            <div class="textsect">
                <h1 className="abouth">Do you know what you have 
                    <span className="agreed-word"> agreed </span>
                to?</h1>
                <p className="para">By utilizing our website, you consent to the conversion of your medical history into an NFT and the provision of access to a designated doctor.</p>
            </div>
            <div className="imgsect">
                <img className="aboutwebsite" src={img1}></img>
            </div>
        </div>
    )
}
export default Agreed;