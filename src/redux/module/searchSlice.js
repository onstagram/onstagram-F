import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosIns from "../../api/api"

const initialState = {
  memberDto: [],
  isLoading: false,
  error: null,
}

const __getSearchResult = createAsyncThunk(
  "SEARCH_RESULT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosIns.get("/search")
      return thunkAPI.fulfillWithValue(data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducer: {},
  extraReducers: {
    [__getSearchResult.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [__getSearchResult.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    [__getSearchResult.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    },
  },
})

export default searchSlice.reducer
