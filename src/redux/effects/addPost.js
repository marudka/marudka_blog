import axios from "axios";
import { ADD_POST, ADD_POST_SUCCESS, ADD_POST_ERROR } from "../actions/addPost";

const addPost = (data) => (dispatch) => {
    dispatch(ADD_POST);

    return axios.post("/api/post", data)
        .then(res => res.data)
        .then(() => {
            dispatch(ADD_POST_SUCCESS());
        }).catch((err) => {
            dispatch(ADD_POST_ERROR(err));
        })
};

export {
    addPost,
}
