import { createSlice } from "@reduxjs/toolkit";
import  { register }  from "./auth-operations";

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
      });
  },
});


 export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import register from './auth-operations';

// const initialState = {
//   user: {},
//   token: '',
//   isLogin: false,
//   isLoading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLogin = true;
//         console.log('User data:', action.payload.user);
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default authSlice.reducer;
