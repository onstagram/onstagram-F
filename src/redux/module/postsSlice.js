import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosIns from "../../api/api"

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  isGlobalmodalPostDetail: false,
}

// export const __postsMain = createAsyncThunk(
//   "posts/POSTS_MAIN",
//   async (payload, thunkAPI) => {
//     try {
//       const {
//         data: {
//           memberDto: memberDto,
//           postDto: postDto,
//           commentList: commentList,
//         },
//       } = await axiosIns.get(`posts`)

//       //console.log('게시글 불러오기 완료!')
//       return thunkAPI.fulfillWithValue(memberDto, postDto, commentList)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }
//   }
// )

export const __postsMain = createAsyncThunk(
  "posts/POSTS_MAIN",
  async (payload, thunkAPI) => {
    try {
      const response = await axiosIns.get(`posts`)
      const { memberDto, postDto, commentList } = response.payload
      //console.log('게시글 불러오기 완료!')
      return { memberDto, postDto, commentList }
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __EditPostMain = createAsyncThunk(
  "posts/EDIT_POSTS_MAIN",
  async (editedPosts, thunkAPI) => {
    try {
      // Assuming editedPosts is an array of objects, each containing postId and caption
      const responses = await Promise.all(
        editedPosts.map((editedPost) => {
          return axiosIns.put("post/edit", editedPost)
        })
      )
      // You can return the responses if needed
      return responses.map((response) => response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __deletePostMain = createAsyncThunk(
  "posts/DELETE_POSTS_MAIN",
  async (payload, thunkAPI) => {
    try {
      //console.log('글 삭제 payload : ', payload)
      const data = await axiosIns.delete(`posts/${payload}`)
      //console.log('글 삭제 data : ', data)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      //console.log('글 삭제 error : ', error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const postsMainSlice = createSlice({
  name: "postsMainSlice",
  initialState,
  reducers: {
    // isGlobalModalPostDetailAction: (state, action) => {
    //   state.isGlobalModalPostDetail = action.payload
    // },
  },
  extraReducers: {
    [__postsMain.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__postsMain.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경
      state.posts = action.payload.postDto
      state.member = action.payload.memberDto
      state.commentList = action.payload.commentList // Store에 있는 state.data에 서버에서 가져온 action.payload 추가
      //console.log('posts main state.posts : ', state.posts)
      //console.log('posts main action.payload : ', action.payload)
    },
    [__postsMain.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload // catch 된 error 객체를 state.error에 추가
    },
    //수정
    [__EditPostMain.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__EditPostMain.fulfilled]: (state, action) => {
      state.isLoading = false
      const editedPosts = action.payload // Assuming this is an array of edited posts

      // Loop through the edited posts and update the state
      editedPosts.forEach((editedPost) => {
        const editedPostIndex = state.posts.findIndex(
          (post) => post.id === editedPost.id
        )

        // Replace the old post with the edited post
        if (editedPostIndex !== -1) {
          state.posts[editedPostIndex] = editedPost
        }
      })
    },
    [__EditPostMain.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload // catch 된 error 객체를 state.error에 추가
    },
    //삭제
    [__deletePostMain.pending]: (state) => {
      state.isLoading = true // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__deletePostMain.fulfilled]: (state, action) => {
      state.isLoading = false // 네트워크 요청이 끝났으니, false로 변경
      state.posts = state.posts.filter((post) => post.id !== action.payload)
      //console.log('posts 삭제 state.posts : ', state.posts)
      //console.log('posts 삭제 action.payload : ', action.payload)
    },
    [__deletePostMain.rejected]: (state, action) => {
      state.isLoading = false // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload // catch 된 error 객체를 state.error에 추가
    },
  },
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = postsMainSlice.actions
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default postsMainSlice.reducer
