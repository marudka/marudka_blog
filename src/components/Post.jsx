import React from "react";
import { Jumbotron, Badge } from "reactstrap";

function Post() {
    return (
        <Jumbotron>
            <h3 className="display-5">Hello, world!</h3>
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

export default Post;
