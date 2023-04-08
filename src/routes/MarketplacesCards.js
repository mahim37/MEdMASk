import "./Agreed.css";
function MarketplacesCards() {
    return (
        <div className="marketplacescards">
            <div className="agreed">
                <div class="textsect">
                    <i class="fa-solid fa-lock"></i>
                    <h1 className="abouth">Unlock Insights</h1>
                    <p className="para">Our platform converts your medical history into an NFT and securely shares it with your designated doctor, unlocking valuable insights for personalized treatment and care.</p>
                </div>
                <div className="imgsect">
                    <img className="aboutwebsite" src="https://monax.io/resources/images/features/feature_1.png"></img>
                </div>
            </div>
            <div className="agreed">
                <div className="imgsect">
                    <img className="aboutwebsite" src="https://monax.io/resources/images/features/feature_3.png"></img>
                </div>
                <div class="textsect">
                    <i class="fa-solid fa-lightbulb"></i>
                    <h1 className="abouth">Easy Integration</h1>
                    <p className="para">Our user-friendly platform seamlessly integrates with your existing healthcare provider systems, making the conversion of your medical history into an NFT and sharing it with your doctor as easy as a few clicks.</p>
                </div>
            </div>
            <div className="agreed">
                <div class="textsect">
                    <i class="fa-solid fa-file-signature"></i>
                    <h1 className="abouth">E-Sign with Confidence</h1>
                    <p className="para">Our platform prioritizes your privacy and security. You can e-sign documents with confidence knowing that your medical history is converted into an NFT and securely shared only with your designated doctor.</p>
                </div>
                <div className="imgsect">
                    <img className="aboutwebsite" src="https://monax.io/resources/images/features/feature_2.png"></img>
                </div>
            </div>
        </div>
    )
}
export default MarketplacesCards;