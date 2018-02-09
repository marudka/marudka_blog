const defaultState = {
    user: null,
    error: null,
    authenticated: false,
    token: null,
    loading: false
};

const login = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            state = {
                ...state,
                loading: true
            };
            break;
        case "LOGIN_REQUEST_SUCCESS":
            state = {
                ...state,
                user: action.payload.user,
                error: null,
                authenticated: true,
                token: action.payload.token,
                loading: false
            };
            break;
        case "LOGIN_REQUEST_ERROR":
            state = {
                ...state,
                error: action.payload,
                loading: false
            };
            break;
        case "LOGOUT":
            state = {
                ...state,
                ...defaultState
            }
    }

    return state;
};

export default login;
