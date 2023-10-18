import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600*1000;

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
      email: '',
      password: '',
      passwordCheck: '',
      userName: '',
      userPhone: '',

      authenticated:false,
      token:null,
  },
  reducers: {
      SIGNUP: (state, action)=>{
        state.email=action.payload.email;
        state.password=action.payload.password;
        state.passwordCheck=action.payload.passwordCheck;
        state.userName=action.payload.userName;
        state.userPhone=action.payload.userPhone;
      },
      LOGIN: (state, action)=>{ 
        state.email=action.payload.email;
        state.password=action.payload.password;
      },
      TOKEN: (state, action) => {
          state.authenticated = true;
          state.token = action.payload.token;
      },
      DELETE_TOKEN: (state) => {
          state.authenticated = false;
          state.accessToken = null;
      },
  }
})

export const { TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
