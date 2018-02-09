const LOGIN = () => {
    return {
        type: "LOGIN_REQUEST",
    }
};

const LOGIN_SUCCESS = (data) => {
    return {
        type: "LOGIN_REQUEST_SUCCESS",
        payload: data,
    }
};

const LOGIN_ERROR = (error) => {
    return {
        type: "LOGIN_REQUEST_ERROR",
        payload: error,
    }
};

const LOGOUT = () => {
    return {
        type: "LOGOUT",
    }
};

export {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
}