import "./Blog.css";
function Blog() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 mt-8">
        How<span className="somespan"> NFTs </span>Are Changing the
        Healthcare Industry: <br></br>A Look at Our Innovative Solution
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">
            Verification of authenticity:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NFTs can be used to verify the authenticity of medical documents,
            such as patient records and diagnostic reports. This could help
            prevent fraud and improve patient safety.
          </p>
        </div>
        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">Ownership of medical data:</h2>
          <p className="text-gray-700 leading-relaxed">
            Patients own their medical data, and NFTs could be used to represent
            ownership of that data. This would give patients more control over
            their health information and potentially lead to better health
            outcomes.
          </p>
        </div>
        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">
            Fundraising for medical research:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            NFTs can also be used to fundraise for medical research, allowing
            individuals to buy and own unique digital assets while supporting a
            good cause.
          </p>
        </div>
        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-bold mb-2">Concepts used:</h2>
          <ul className="list-disc list-inside">
            <li>We are running private geth node on GCP using AMD instances</li>
            <li>Running website using GCP T2D VM instance running on nginx</li>
            <li>Utilized ER721 contract for the project.</li>
            <li>Deployed and tested using Hardhat framework.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Blog;
