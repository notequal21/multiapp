import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import WalletSlice from './reducers/WalletSlice';

export const store = configureStore({
  reducer: {
    wallet: WalletSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
