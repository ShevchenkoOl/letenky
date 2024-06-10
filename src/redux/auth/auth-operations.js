import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/auth";
import { Notify } from "notiflix";
import { startLoading, stopLoading } from "./auth-slice";

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      dispatch(startLoading());
      const result = await api.register(data);
      return result;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      if (error.response?.status === 409) {
        Notify.failure(
          "This email is already registered. Please use a different email."
        );
      } else {
        Notify.failure(errorMessage);
      }
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(stopLoading());
  }
}
);

const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      dispatch(startLoading());
      const result = await api.login(userData);
      return result;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      Notify.failure(errorMessage);
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(stopLoading());
    }
  }
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(startLoading());
      await api.logout();
      return;
    } catch (response) {
      return rejectWithValue(response.data);
    } finally {
      dispatch(stopLoading());
    }
  }
);

export { register, logout, login };
