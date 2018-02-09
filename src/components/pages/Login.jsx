import React, { Component } from "react";
import PropsTypes from "prop-types";

import LoginForm from "./../../containers/Login/LoginForm.js";
import AddPost from "./../../containers/Login/AddPost.js";

function Login({ authenticated }) {
    const content = authenticated ? <AddPost /> : <LoginForm />;
    return (
        <div>{content}</div>
    )
}

Login.propTypes = {
    authenticated: PropsTypes.bool.isRequired,
};

export default Login;
