import axios from "axios"
import axiosIns from "../../api/api"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

/*이 부분이 포스트에 들어가는 정보를 불러오는 로직*/
export const __getPostThunk = createAsyncThunk(
  "GET_POST_INFO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosIns.get("/post/getpost")
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

/**/
export const __addPostThunk = createAsyncThunk(
  "ADD_POST",
  async (payload, thunkAPI) => {
    try {
      await axiosIns.post("/post/register", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return thunkAPI.fulfillWithValue(payload)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

/*이 로직이 프로파일에 해당하는 곳에서 게시물을 불러오는 로직 */
export const __getPostRoadThunk = createAsyncThunk(
  "GET_POSTS",
  async (userId, thunkAPI) => {
    try {
      const { data } = await axiosIns.get(`mypage/${userId}`)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __updatePostThunk = createAsyncThunk(
  "UPDATE_POST",
  async (payload, thunkAPI) => {
    try {
      axios.patch("/profile", payload)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      error.rejectWithValue(error.code)
    }
  }
)

const initialState = {
  post: {
    postId: "",
    userId: "",
    postImg: "",
    caption: "",
    postDate: "",
  },
}

export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.Post = action.payload
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__getPostThunk.pending]: (state) => {
      state.isLoading = true
    },
    [__addPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.uploadPost = action.payload
    },
    [__addPostThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__addPostThunk.pending]: (state) => {
      state.isLoading = true
    },
    [__updatePostThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.todo = action.payload
    },
    [__updatePostThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__updatePostThunk.pending]: (state) => {
      state.isLoading = true
    },
  },
})

export const { isPostModalGlobalAction, isPostSuccessAction } =
  uploadSlice.actions

export default uploadSlice.reducer
