const defaultState = {
    list: [],
};

const posts = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_POSTS":
            state = {
                ...state,
                status: "PROGRESS",
            };
            break;
        case "GET_POSTS_SUCCESS":
            state = {
                ...state,
                status: "READY",
                list: action.payload.posts,
            };
            break;
        case "GET_POSTS_ERROR":
            state = {
                ...state,
                status: "ERROR",
                error: action.payload.error,
            };
            break;
    }

    return state;
};

export default posts;