const ADD_POST = (data) => {
    return {
        type: "ADD_POST",
        payload: data,
    }
};

const ADD_POST_SUCCESS = () => {
    return {
        type: "ADD_POST_SUCCESS",
    }
};

const ADD_POST_ERROR = (error) => {
    return {
        type: "ADD_POST_ERROR",
        payload: error,
    }
};

export {
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_ERROR,
}
