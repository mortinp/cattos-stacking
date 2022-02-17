import React, { useState } from "react";
import Web3 from "web3";

export const useContractInstance = () => {
  const [contract, setContract] = useState("");
  return { contract, setContract };
};
