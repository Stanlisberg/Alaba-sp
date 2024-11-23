import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to send login details to the API
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
  },
};

export const loginUser = createAsyncThunk("loginUser", async (payload) => {
  try {
    const response = await fetch(
      "https://alaba-gstm.onrender.com/alabapi/login",
      // `https://alaba-gstm.onrender.com/alabapi/login?email=${encodeURIComponent(
      //   email
      // )}&password=${encodeURIComponent(password)}`
      payload,
      options
    );
    const data = await response.json();

    //   return data;

    console.log(data);
  } catch (error) {
    console.log("hey guys");
    console.error("Error login in:", error);
    throw error;
  }
});

const initialState = {
  loginData: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginData = action.payload;
        state.loginLoading = false;
      });
  },
});

export default loginSlice.reducer;
