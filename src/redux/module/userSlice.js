import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import axiosIns from "../../api/api"

export const __userEditThunk = createAsyncThunk(
  "USER_EDIT",
  async (payload, thunkAPI) => {
    try {
      const response = await axiosIns.put("/setting/edit", payload)
      return thunkAPI.fulfillWithValue(response)
    } catch (error) {
      throw thunkAPI.rejectWithValue(error)
    }
  }
)

//이 아래 코드가 회원정보 수정 코드이구
export const __getUserEditThunk = createAsyncThunk(
  "GET_USER_EDIT",
  async (userId, thunkAPI) => {
    try {
      const {
        data: { data: MemberInfo },
      } = await axiosIns.get(`/setting/edit/${userId}`)
      return thunkAPI.fulfillWithValue(MemberInfo)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  MemberInfo: {
    userId: "",
    userImg: "",
    introduction: "",
    email: "",
  },
  isLoading: false,
  error: null,
}

export const userSlice = createSlice({
  name: "memberInfo",
  initialState,
  reducer: {},
  extraReducers: {
    [__userEditThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.MemberInfo = action.payload
    },
    [__userEditThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    },
    [__userEditThunk.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [__getUserEditThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.MemberInfo = action.payload
    },
    [__getUserEditThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    },
    [__getUserEditThunk.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
  },
})

export default userSlice.reducer
