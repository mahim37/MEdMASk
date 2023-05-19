import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboarddata.css"
import img2 from "./transfer.png";
import img1 from "./l.png";
import img3 from "./m.png";
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
export default function Dashboarddata() {
  const [posts, setPosts] = useState([
    {
      image: img1,
      title: "List NFT",
      description:
        "This category allows patients to easily list their NFTs on the blockchain, providing a secure and transparent record of their medical assets. Patients can showcase their NFTs, including medical records, diagnostic images, or health-related tokens, creating a personalized digital health portfolio.",
      urllink: "/listmynft",
    },
    {
      image: img2,
      title: "Transfer NFT",
      description:
        "The Transfer NFT category enables seamless transfer of NFT ownership from patients to doctors. This feature ensures that doctors can securely access and update patient data, facilitating efficient communication and collaboration while maintaining data integrity and patient privacy.",
      urllink: "/transfernft",
    },
    {
      image: "https://i0.wp.com/cifs.health/wp-content/uploads/2022/05/challenges-nft-healthcare.jpg?fit=1200%2C627&ssl=1",
      title: "Marketplace",
      description:
        "The Marketplace category serves as a central hub for patients to manage and explore their past NFTs. It provides an organized overview of the patients' medical NFTs, allowing them to review their medical history, monitor progress, and potentially engage in peer-to-peer exchange or selling of NFTs within a trusted healthcare ecosystem.",
      urllink: "/nftmarketplace",
    },
  ]);
  return (
    <div className="twccards">
      <div className="bg-white-100 dark:bg-white-900 py-100 px-120">
        <div className="grid grid-flow-row gap-20 text-neutral-1000 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {shuffle(posts).map((post, index) => (
            <div
              key={index}
              className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
            >
              <Link to={post.urllink} className="cursor-pointer">
                <figure>
                  <img
                    src={`${post.image}?auto=format&fit=crop&w=400&q=50`}
                    className="rounded-t h-72 w-full object-cover"
                  />
                  <figcaption className="p-4">
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                      {post.title}
                    </p>
                    <small className="leading-5 text-gray-500 dark:text-gray-400">
                      {post.description}
                    </small>
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
