import "./Agreed.css";
import imgm1 from './unlockinsights.jpeg'
import imgm2 from './easyintegration.jpeg'
import imgm3 from './teesramc.png'

function MarketplacesCards() {
  return (
    <div className="marketplacescards">
      <br />
      <div className="agreed">
        <div className="textsect">
          <i className="fa-solid fa-lock"></i>
          <h1 className="abouth">Unlock Insights</h1>
          <p className="para">Our platform converts your medical history into an NFT and securely shares it with your designated doctor, unlocking valuable insights for personalized treatment and care.</p>
        </div>
        <div className="imgsect">
          <img className="specialimagesf" src={imgm1} alt="Unlock Insights" />
        </div>
      </div>
      <div className="agreed">
        <div className="imgsect">
          <img className="specialimages" src={imgm2} alt="Easy Integration" />
        </div>
        <div className="textsect">
          <i className="fa-solid fa-lightbulb"></i>
          <h1 className="abouth">Easy Integration</h1>
          <p className="para">Our user-friendly platform seamlessly integrates with your existing healthcare provider systems, making the conversion of your medical history into an NFT and sharing it with your doctor as easy as a few clicks.</p>
        </div>
      </div>
      <div className="agreed">
        <div className="textsect">
          <i className="fa-solid fa-file-signature"></i>
          <h1 className="abouth">E-Sign with Confidence</h1>
          <p className="para">Our platform prioritizes your privacy and security. You can e-sign documents with confidence knowing that your medical history is converted into an NFT and securely shared only with your designated doctor.</p>
        </div>
        <div className="imgsect">
          <img className="specialimages" src={imgm3} alt="E-Sign with Confidence" />
        </div>
      </div>
    </div>
  );
}

export default MarketplacesCards;
