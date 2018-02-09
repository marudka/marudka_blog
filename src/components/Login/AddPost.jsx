import React, { Component } from "react";
import PropsTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeTextarea(event) {
        this.setState({ content: event.target.value });
    }

    handleOnClick() {
        const data = {
            "title": this.state.title,
            "content": this.state.content,
            "author": "Marudka",
            "tags": ["react", "redux"]
        };
        this.props.addPost(data);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input
                        type="email" name="login" id="exampleEmail" placeholder="with a placeholder"
                        onChange={this.handleTitleChange}
                     />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={this.handleChangeTextarea} />
                </FormGroup>
                <Button onClick={this.handleOnClick}>Submit</Button>
            </Form>
        );
    }
}

AddPost.propTypes = {
    addPost: PropsTypes.func.isRequired,
};

export default AddPost;
