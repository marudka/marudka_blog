import React, { Component } from "react";
import PropsTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { WithContext as ReactTags } from 'react-tag-input';

class AddPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            tags: [],
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
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
            "author": this.props.user,
            "tags": this.state.tags,
        };
        this.props.addPost(data);
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({ tags: tags });
    }

    render() {
        const { tags } = this.state;
        let suggestions = ["React", "Redux", "Webpack", "Angular"];

        return (
            <Form>
                <h3>Hello {this.props.user}!</h3>
                <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input
                        type="email" name="login" id="exampleEmail" placeholder="with a placeholder"
                        onChange={this.handleTitleChange}
                     />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Post content</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={this.handleChangeTextarea} />
                </FormGroup>
                <ReactTags tags={tags}
                   suggestions={suggestions}
                   handleDelete={this.handleDelete}
                   handleAddition={this.handleAddition}
                   handleDrag={this.handleDrag}
                />
                <Button onClick={this.handleOnClick}>Submit</Button>
            </Form>
        );
    }
}

AddPost.propTypes = {
    addPost: PropsTypes.func.isRequired,
    user: PropsTypes.string.isRequired,
};

export default AddPost;
