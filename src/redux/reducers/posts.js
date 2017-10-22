const defaultState = {
    posts: {
        list: [],
    },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_POSTS":
            state = {
                ...state,
                posts: {
                    ...state.posts,
                    status: "PROGRESS",
                }
            };
            break;
        case "GET_POSTS_SUCCESS":
            state = {
                ...state,
                posts: {
                    ...state.posts,
                    status: "READY",
                    list: action.payload.posts,
                }
            };
            break;
        case "GET_POSTS_ERROR":
            state = {
                ...state,
                posts: {
                    ...state.posts,
                    status: "ERROR",
                    error: action.payload.error,
                }
            };
            break;
    }

    return state;
};

export default reducer;