import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/auth";
import { Notify } from "notiflix";

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      // console.log('Registration result:', result);
      return result;
    } catch (error) {
      // console.error('Registration error:', response?.data);
      //return rejectWithValue(response.data);
      const errorMessage = error.response?.data?.message || error.message;
      if (error.response?.status === 409) {
        Notify.failure("This email is already registered. Please use a different email.");
      } else {
        Notify.failure(errorMessage);
      }
      return rejectWithValue(errorMessage);
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
      return;
    } catch (response) {
      return rejectWithValue(response.data);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const result = await api.login(userData);
      // Если вход успешен, возвращаем результат
      return result;
    } catch (error) {
      // Если возникла ошибка при входе, возвращаем ее
      const errorMessage = error.response?.data?.message || error.message;
      Notify.failure(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export { register, logout, login };