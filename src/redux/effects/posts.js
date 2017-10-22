import axios from "axios";
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../actions/posts";

const fetchPosts = () => (dispatch) => {
    dispatch(GET_POSTS);
    return axios.get("/api/posts").then((res) => {
        dispatch(GET_POSTS_SUCCESS(res));
    }, (err) => {
        dispatch(GET_POSTS_ERROR(err));
    })
};

export {
    fetchPosts,
}
