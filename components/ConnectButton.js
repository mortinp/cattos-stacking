import { useState, useEffect } from "react";
import Web3 from "web3";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useWeb3Instance, useContractInstance } from "../hooks";
import { constants } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { setWalletAddress, setTotalNftInWallet } from "../store/slices";
export default function ConnectButton() {
  const dispatch = useDispatch();
  const [accountAddress, setAccountAddress] = useState("");
  const { web3, setWeb3 } = useWeb3Instance();
  const { contract, setContract } = useContractInstance();
  const { abi, address, nftAddress, nftContractAbi } = constants;

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  async function getAccount() {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0];
  }

  const connectButtonOnClick = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then(async (response) => {
        dispatch(setWalletAddress(response));
        const contract = new web3.eth.Contract(nftContractAbi, nftAddress);
        const balance = await contract.methods.balanceOf(response).call();
        dispatch(setTotalNftInWallet(balance));
        const nfts = [];
        let step = 0;
        while (step < balance) {
          const tokenId = await contract.methods
            .tokenOfOwnerByIndex(response, step)
            .call();
          const obj = {};
          const tokenMetadataURI = await contract.methods
            .tokenURI(tokenId)
            .call();

          if (tokenMetadataURI.startsWith("ipfs://")) {
            // https://gateway.pinata.cloud/ipfs
            tokenMetadataURI = `https://ipfs.io/ipfs/${
              tokenMetadataURI.split("ipfs://")[1]
            }`;
          }

          obj.imageUri = tokenMetadataURI.replace(".json", ".png");
          obj.costInWei = await contract.methods.cost().call();
          obj.symbol = await contract.methods.symbol().call();
          nfts.push(obj);
          step++;
        }
        debugger;
      });
    } else {
      console.log("error");
    }
  };

  return (
    <Button variant="contained" onClick={connectButtonOnClick}>
      {!!accountAddress ? accountAddress : "Connect Wallet"}
    </Button>
  );
}
