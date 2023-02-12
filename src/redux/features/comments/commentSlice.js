import { createSlice } from "@reduxjs/toolkit"

export const commentSlice = createSlice({
    name: "comment",
    initialState: {
        comments: [],
        postId: null,
        isOpen: false
    },
    reducers: {
        setComment: (state, action) => {
            state.comments = action.payload
        },
        openModal: (state, action) => {
            state.isOpen = true
            state.postId = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
            state.postId = null
        }
    }
})


export const { setComment, openModal, closeModal } = commentSlice.actions

export default commentSlice.reducer