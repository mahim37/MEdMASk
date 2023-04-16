import "./Spin.css";
import NewNavbar from "./components/NewNavbar";
import "./Tnft.css";
import { ethers } from "ethers";
import React from "react";
import HealthNFTJSON from "./HealthNFT.json";

export default function Transfernft() {
  const transfer = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    console.log(addr);

    const to = "0xb3Ed329EC47337016ABD6ac9871A394103968F11";
    const tokenId = 8;
    let contract = new ethers.Contract(
      HealthNFTJSON.address,
      HealthNFTJSON.abi,
      signer
    );
    console.log(contract);
    let transaction = await contract.transferNFT(to, tokenId);
    console.log(transaction);
  };
  return (
    <>
      <NewNavbar />
      <div className="transferform">
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="formkalook">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Sender Wallet Address
            </label>
            <input
              class="appearance-none block w-500 bg-gray-200 text-gray-700 border border-black-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
            />
            </div>
            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Receiver Wallet Address
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>0xb3Ed329EC47337016ABD6ac9871A394103968F11</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <button className="tnft" onClick={transfer}>
          Transfer NFT
        </button>
      </form>

      </div>
    </>
  );
}
