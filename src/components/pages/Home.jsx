import React, { Component } from "react";
import axios from "axios";

import Post from "./../Post.jsx"

class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        axios.get("/api/posts").then((result) => {
            console.log(result);
        });
    }

    render() {
        return (
            <div>
                <Post />
                <Post />
            </div>
        );
    }
}

export default Home;
