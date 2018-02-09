import { requestLogin } from "./../../redux/effects/login";

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credencials) => {
            dispatch(requestLogin(credencials))
        }
    }
};

export {
    mapDispatchToProps,
}
