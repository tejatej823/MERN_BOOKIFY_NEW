import { createSlice } from "@reduxjs/toolkit";
import { fetchAllBooks } from "./bookAPI";
const bookSlice = createSlice({
  name: "books",
  initialState: {
    bookItems: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllBooks.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchAllBooks.fulfilled,(state,action)=>{
        state.status='succeeded';
        state.bookItems=action.payload;
    })
    .addCase(fetchAllBooks.rejected,(state,action)=>{
        state.status='failed';
        state.error=action.payload;
    })
  },
});
export default bookSlice.reducer;