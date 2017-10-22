import React, { Component } from "react";
import PropsTypes from "prop-types";

import Post from "./../Post.jsx"

class List extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const { posts, status } = this.props;
        if (status === "PROGRESS") {
            return <div>loading ...</div>
        }
        if (status === "ERROR") {
            return <div>Error - reload</div>
        }
        const items = posts.map((post, key) => {
            return <Post key={key} post={post} />;
        });

        return (
            <div>
                {items}
            </div>
        );
    }
}

List.propTypes = {
    posts: PropsTypes.array.isRequired,
    getPosts: PropsTypes.func.isRequired,
    status: PropsTypes.string.isRequired,
};

export default List;
