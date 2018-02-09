import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Template from "./pages/Template.jsx"
import { connect } from "react-redux";
import { isAutenticated } from "./../redux/effects/login";

class App extends Component {
    componentWillMount() {
        this.props.isAutenticated();
    }

    render() {
        return (
            <BrowserRouter>
                <Template />
            </BrowserRouter>
        );
    }
}

export default connect(null, { isAutenticated })(App);


