import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAllBooks=createAsyncThunk(
  "books/fetchAllBooks",async(_,thunkAPI)=>{
    try{
      const response = await axios.get("http://localhost:3000/api/books/");
      console.log(response.data.data);
      return response.data.data;
    }
    catch(err){
      return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong")
    }
  }
)