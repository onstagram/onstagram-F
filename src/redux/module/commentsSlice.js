import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIns from "../../api/api"

const initialState = {
  comments: [],
  isLoading: "",
  error: null,
}

/**댓글 불러오기 */
export const __commentsGet = createAsyncThunk(
  "POSTS/COMMENTS_GET",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosIns.get(`comments`)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

/**댓글 추가하기 */
export const __commentsAdd = createAsyncThunk(
  "POSTS/COMMENTS_ADD",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosIns.post(`comments`, {
        comment: payload.comment,
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __commentsDelete = createAsyncThunk(
  "POSTS/COMMENTS_DELETE",
  async (payload, thunkAPI) => {
    try {
      await axiosIns.delete(`comments`)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__commentsGet.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__commentsGet.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = action.payload
    },
    [__commentsGet.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__commentsAdd.pending]: (state) => {
      state.isLoading = true
    },
    [__commentsAdd.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments.comment = [...state.comments.comment, action.payload]
    },
    [__commentsAdd.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__commentsDelete.pending]: (state) => {
      state.isLoading = true
    },
    [__commentsDelete.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments.comment = state.comments.comment.filter(
        (comment) => comment.id !== action.payload
      )
    },
    [__commentsDelete.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default commentsSlice.reducer
