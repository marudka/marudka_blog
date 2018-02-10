import React from "react";
import { Jumbotron, Badge } from "reactstrap";
import PropTypes from "prop-types";
import dateFns from "date-fns";

const colorsMap = {
    React: "primary",
    Redux: "danger"
};

function Post({ post }) {
    const tags = post.tags.map((tag) => {
        const badgeClass = colorsMap[tag.text] || "primary";
        return <Badge key={tag.id} color={badgeClass}>{tag.text}</Badge>
    });
    console.log(post);
    const date = dateFns.format(post.date, 'DD/MM/YYYY');
    return (
        <Jumbotron>
            <h3 className="display-5">{post.title}</h3>
            <hr className="my-2" />
            <p className="mb-0"><strong>{post.author}</strong>, {date}</p>
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
