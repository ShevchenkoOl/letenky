import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/auth";

export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      // console.log('Registration result:', result);
      return result;
    } catch (response) {
      // console.error('Registration error:', response?.data);
      return rejectWithValue(response.data);
    }
  }
);