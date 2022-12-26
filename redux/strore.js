import { configureStore } from '@reduxjs/toolkit';
import { CompanyDataSlice } from './features/companyDataSlice';

export const store = configureStore({
  reducer: {
    companyData: CompanyDataSlice.reducer,
  },
});
