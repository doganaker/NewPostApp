import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comments/commentSlice";
import postReducer from "../features/posts/postSlice";

export default configureStore({
    reducer: {
        post: postReducer,
        comment: commentReducer
    }
})