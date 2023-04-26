import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    isWalletConnected: false,
  },
  reducers: {
    connectWallet: (state) => {
      state.isWalletConnected = true;
    },
    disconnectWallet: (state) => {
      state.isWalletConnected = false;
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;

export const selectIsWalletConnected = (state: RootState) =>
  state.wallet.isWalletConnected;

export default walletSlice.reducer;
