import React from "react";
import { Jumbotron, Badge } from "reactstrap";
import PropTypes from "prop-types";

function Post({ post }) {
    return (
        <Jumbotron>
            <h3 className="display-5">{post.title}</h3>
            <hr className="my-2" />
            <p className="mb-0">Marudka</p>
            <hr className="my-2" />
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <div className="lead">
                <h5><Badge color="primary">React</Badge>, <Badge color="danger">Redux</Badge></h5>
            </div>
        </Jumbotron>
    );
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;
