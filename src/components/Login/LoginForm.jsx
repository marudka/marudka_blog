import React, { Component } from "react";
import PropsTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleLoginChange(event) {
        this.setState({ login: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    login() {
        this.props.login(this.state)
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Login</Label>
                    <Input
                        type="email" name="login" id="exampleEmail" placeholder="with a placeholder"
                        onChange={this.handleLoginChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password" name="password" id="examplePassword" placeholder="password placeholder"
                        onChange={this.handlePasswordChange}
                    />
                </FormGroup>
                <Button onClick={this.login}>Submit</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    login: PropsTypes.func.isRequired,
};

export default LoginForm;
