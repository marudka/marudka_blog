import React, { Component } from "react";

import List from "./../../containers/Posts/List.jsx";

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <List />
            </div>
        );
    }
}

export default Home;
