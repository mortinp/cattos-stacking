import React, { useState } from "react";
import Web3 from "web3";

export const useWeb3Instance = () => {
  const [web3, setWeb3] = useState("");
  return { web3, setWeb3 };
};
