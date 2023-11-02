import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk"

import uploadSlice from "./module/uploadSlice"
import postsSlice from "./module/postsSlice"
import userSlice from "./module/userSlice"

export const store = configureStore({
  reducer: {
    uploadSlice,
    postsSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store
