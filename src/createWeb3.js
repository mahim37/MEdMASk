import Web3 from "web3";

const createWeb3 = (providerUrl, chainId) => {
  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3(provider);
  web3.eth.net.getId().then((networkId) => {
    if (networkId !== chainId) {
      console.error("Invalid network selected");
    }
  });
  return web3;
};

export default createWeb3;
