import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import logger from "redux-logger"

import uploadSlice from "./module/uploadSlice"
import postsSlice from "./module/postsSlice"

export const store = configureStore({
  reducer: {
    uploadSlice,
    postsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store
