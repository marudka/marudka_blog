import axios from "axios";
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions/login";
import storage from "../services/storage";


const requestLogin = (credentials) => (dispatch) => {
    dispatch(LOGIN);

    return axios.post("/api/login", credentials)
        .then(res => res.data)
        .then(data => {
            // set axios to send auth with every request
            axios.defaults.headers.common["Authorization"] = data.token;


            if (!data.authenticated) {
                return dispatch(LOGIN_ERROR(data.message));
            }

            dispatch(LOGIN_SUCCESS(data));

            storage.set({
                token: data.token,
                _id: data.user._id,
                login: data.user.login
            })
        }).catch((err) => {
            console.log(err);
        })
};

const logout = () => (dispatch) => {
    dispatch(LOGOUT);
    storage.clear();

    // delete axios auth header
    delete axios.defaults.headers.common["Authorization"];
};

const isAutenticated = () => (dispatch) => {
    const user = {
        token: storage.get("token"),
        user: {
            _id: storage.get("_id"),
            login: storage.get("login"),
        },
    };

    if(user.token) {
        dispatch(LOGIN_SUCCESS(user))
    }
};

export {
    requestLogin,
    logout,
    isAutenticated,
}