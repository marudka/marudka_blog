const GET_POSTS = () => {
    return {
        type: "GET_POSTS",
    }
};

const GET_POSTS_SUCCESS = (data) => {
    return {
        type: "GET_POSTS_SUCCESS",
        payload: {
            posts: data,
        }
    }
};

const GET_POSTS_ERROR = (error) => {
    return {
        type: "GET_POSTS_ERROR",
        payload: {
            error: error,
        }
    }
};

export {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
}
