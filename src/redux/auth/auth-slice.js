import { createSlice, createAction } from "@reduxjs/toolkit";
import  { login, logout, register }  from "./auth-operations";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
name: "auth",
initialState,
extraReducers: (builder) => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(register.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {};
        state.token = '';
        state.isLogin = false;
      });
  },
});

export const startLoading = createAction('auth/startLoading');
export const stopLoading = createAction('auth/stopLoading');


 export default authSlice.reducer;

