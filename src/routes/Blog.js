import "./Blog.css";
function Blog() {
    return (
        <>
        <h1 className="blog-title">How<span className="agreed-word"> NFTs </span>Are Changing the Healthcare Industry: <br></br>A Look at Our Innovative Solution</h1>
        <div className="fullblog">
            <div className="insideblog">
                <div className="first">
                Verification of authenticity: NFTs can be used to verify the authenticity of medical documents, such as patient records and diagnostic reports. This could help prevent fraud and improve patient safety.  
                </div>
                <div className="second">
                Ownership of medical data: Patients own their medical data, and NFTs could be used to represent ownership of that data. This would give patients more control over their health information and potentially lead to better health outcomes.
                </div>
            </div>
            <div className="insideblog">
                <div className="third">
                    Fundraising for medical research: NFTs can also be used to fundraise for medical research, allowing individuals to buy and own unique digital assets while supporting a good cause.  
                </div>
                <div className="fourth">
                Concepts used: 
                <br></br>
                    <div className="starpoints">
                    <div>✦ We are running private geth node on gcp using amd instances</div>

                    <div>✦ Running website using gcp t2d vm instance running on nginx</div> 

                    <div>✦ Used ER721 contract</div>

                    <div>✦ Hardhat to test and deploy</div>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
}
export default Blog;
