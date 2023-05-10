import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: true,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers: {

  },
});

export default usersSlice.reducer;
