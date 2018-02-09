import React from "react";
import { Jumbotron, Badge } from "reactstrap";
import PropTypes from "prop-types";

const colorsMap = {
    React: "primary",
    Redux: "danger"
};

function Post({ post }) {
    const tags = post.tags.map((tag) => {
        const badgeClass = colorsMap[tag] || "primary";
        return <Badge color={badgeClass}>{tag}</Badge>
    });
    return (
        <Jumbotron>
            <h3 className="display-5">{post.title}</h3>
            <hr className="my-2" />
            <p className="mb-0">{post.author}</p>
            <hr className="my-2" />
            <p className="lead">{post.content}</p>
            <div className="lead">
                <h5>{tags}</h5>
            </div>
        </Jumbotron>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;
