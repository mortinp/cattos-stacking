import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    appInfo: {
      address: "",
      web3Instance: "",
      contractInstance: "",
      totalNftInWallet: "",
    },
  },
  reducers: {
    setTotalNftInWallet: (state, action) => {
      state.appInfo = { ...state.appInfo, totalNftInWallet: action.payload };
    },
    setWalletAddress: (state, action) => {
      state.appInfo = { ...state.appInfo, address: action.payload };
    },
    setWeb3Instance: (state, action) => {
      state.appInfo = { ...state.appInfo, web3Instance: action.payload };
    },
    setContractInstance: (state, action) => {
      state.appInfo = { ...state.appInfo, contractInstance: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setWalletAddress,
  setWeb3Instance,
  setContractInstance,
  setTotalNftInWallet,
} = appSlice.actions;

export const appSliceReducer = appSlice.reducer;
