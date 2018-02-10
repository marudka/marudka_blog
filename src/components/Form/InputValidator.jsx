import React, { Component } from "react";
import PropsTypes from "prop-types";
import classnames from "classnames";

import { Input } from "reactstrap";

class InputValidator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            value: "",
            isSubmitted: false,
        };

        this.test = this.test.bind(this);
    }

    test(event) {
        const value = event.target.value;
        const regex = new RegExp(this.props.rule.regex);
        const isValid = regex.test(value);
        this.setState({ value, isValid });
    }
    render() {
        console.log(this.state);
        const inputClass = classnames({ error: !this.state.isValid });
        return <div className={inputClass}>
            <Input onChange={this.test} />
        </div>
    }
}

InputValidator.propTypes = {
    placeholder: PropsTypes.string,
    rule: PropsTypes.object.isRequired,
};

export default InputValidator;