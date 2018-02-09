const defaultState = {};

const addPost = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_POST":
            state = {
                ...state,
                status: "PROGRESS"
            };
            break;
        case "ADD_POST_SUCCESS":
            state = {
                ...state,
                status: "SUCCESS"
            };
            break;
        case "ADD_POST_ERROR":
            state = {
                ...state,
                error: action.payload,
                status: "ERROR"
            };
            break;
    }

    return state;
};

export default addPost;
