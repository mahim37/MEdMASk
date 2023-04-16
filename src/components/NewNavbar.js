import React, { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { MenuItemsCopy } from "./MenuItemsCopy";
import { Link } from "react-router-dom";

import { ethers } from "ethers";

export default function NewNavbar() {
  const [clicked, setClicked] = useState(false);
  const [connected, setConnected] = useState(false);
  const [currAddress, setCurrAddress] = useState("0x");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const connectWebsite = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setCurrAddress(address);
        setConnected(true);
      } else {
        console.log("Metamask not found");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.selectedAddress) {
      setConnected(true);
      setCurrAddress(ethereum.selectedAddress);
    }

    ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length === 0) {
        setConnected(false);
        setCurrAddress("0x");
      } else {
        setConnected(true);
        setCurrAddress(accounts[0]);
      }
    });
    window.addEventListener("load", async () => {
      if (ethereum && ethereum.selectedAddress) {
        setConnected(true);
        setCurrAddress(ethereum.selectedAddress);
      }
    });
    return () => {
      if (ethereum) {
        ethereum.removeAllListeners("accountsChanged");
      }
      window.removeEventListener("load", async () => {});
    };
  }, []);

  useEffect(() => {
    if (connected) {
      const ethereumButton = document.querySelector(".enableEthereumButton");
      ethereumButton.textContent = "Connected";
      ethereumButton.classList.remove("hover:bg-blue-70");
      ethereumButton.classList.remove("bg-blue-500");
      ethereumButton.classList.add("hover:bg-green-70");
      ethereumButton.classList.add("bg-green-500");
    }
  }, [connected]);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">MedMask</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItemsCopy.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <button
            className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
            onClick={connectWebsite}
          >
            {connected ? "Connected" : "Connect Wallet"}
          </button>
        </li>
        <div className="text-black text-bold text-right mr-10 text-sm">
          {currAddress !== "0x"
            ? "Connected to"
            : "Not Connected. Please login to view NFTs"}{" "}
          {currAddress !== "0x" ? currAddress.substring(0, 15) + "..." : ""}
        </div>
      </ul>
    </nav>
  );
}
