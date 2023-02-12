import { setPost } from "../features/posts/postSlice"
import { setComment } from "../features/comments/commentSlice"

export const fetchData = (url, fetchFor, dispatch) => {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            return res.json()
        })
        .then(data => {
            if (fetchFor === "posts") {
                dispatch(setPost(data))
            } else {
                dispatch(setComment(data))
            }
        })
        .catch(err => {
            console.log(err.message)
        })
}