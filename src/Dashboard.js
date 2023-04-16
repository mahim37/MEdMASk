import { useLocation, useParams, Link } from "react-router-dom";
import HealthNFTJSON from "./HealthNFT.json";
import axios from "axios";
import NFTTile from "./components/NFTTile";
import "./Spin.css";
import NewNavbar from "./components/NewNavbar";
import { useState } from "react";
import { ethers } from "ethers";
export default function Dashboard() {
  const [data, updateData] = useState([]);
  const [dataFetched, updateFetched] = useState(false);
  const [address, updateAddress] = useState("0x");
  const [totalPrice, updateTotalPrice] = useState("0");

  async function getNFTData(tokenId) {
    let sumPrice = 0;
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();

    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      HealthNFTJSON.address,
      HealthNFTJSON.abi,
      signer
    );
    //create an NFT TokenConnected to 0xBf6EA356cbF33...
    let transaction1 = await contract.getMyNFTs();
    console.log(transaction1);
    let transaction = new Array(transaction1[transaction1.length - 1]);
    /*
     * Below function takes the metadata from tokenURI and the data returned by getMyNFTs() contract function
     * and creates an object of information that is to be displayed
     */
    const items = await Promise.all(
      transaction.map(async (i) => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        console.log(tokenURI);
        let meta = await axios.get(tokenURI);
        meta = meta.data;
        console.log(meta);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        };
        sumPrice += Number(price);
        console.log(sumPrice);
        return item;
      })
    );
    updateData(items);
    updateFetched(true);
    updateAddress(addr);
    updateTotalPrice(sumPrice.toPrecision(3));
  }

  const params = useParams();
  const tokenId = params.tokenId;
  if (!dataFetched) getNFTData(tokenId);

  return (
    <div className="min-h-screen bg-gray-100">
      <NewNavbar />
      <div className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg px-8 py-10 md:py-12">
          <div className="mb-8 text-center md:text-2xl text-gray-600">
            <h2 className="font-bold">Wallet Address</h2>
            <p className="mt-2">{address}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600">
            <div className="text-center">
              <h2 className="font-bold">No. of NFTs</h2>
              <p className="mt-2">{data.length}</p>
            </div>
            <div className="text-center">
              <h2 className="font-bold">Total Value</h2>
              <p className="mt-2">{totalPrice} ETH</p>
            </div>
          </div>
          <div className="mt-10 text-center md:text-xl text-gray-600">
            <h2 className="font-bold">Your NFTs</h2>
            {data.length > 0 ? (
              <div className="flex justify-center flex-wrap max-w-screen-xl mt-6">
                {data.map((value, index) => (
                  <NFTTile data={value} key={index} />
                ))}
              </div>
            ) : (
              <p className="mt-6">
                Oops, No NFT data to display (Are you logged in?)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
