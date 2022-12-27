import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const CompanyDataSlice = createSlice({
  name: 'companyData',
  initialState,
  reducers: {
    getCompanyData: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCompanyData } = CompanyDataSlice.actions;
export default CompanyDataSlice.reducer;
