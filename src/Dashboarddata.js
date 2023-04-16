import { useState } from "react";
import { Link } from "react-router-dom";
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
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
      title: "List NFT",
      description:
        "sting coffee. How can we achieve the best tasting coffeeroasting?",
      urllink: "/listmynft",
    },
    {
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
      title: "Transfer NFT",
      description:
        "sting coffee. How can we achieve the best tasting coffeeroasting?",
      urllink: "/transfernft",
    },
    {
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0",
      title: "Marketplace",
      description:
        "sting coffee. How can we achieve the best tasting coffeeroasting?",
      urllink: "/nftmarketplace",
    },
  ]);
  return (
    <div className="twccards flex justify-center">
      <div className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
