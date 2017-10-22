import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler } from "reactstrap";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="top-bar bg-primary">
                <Container>
                    <Navbar dark={true}>
                        <NavbarBrand href="/" className="mr-auto">
                            <h3 className="text-white">
                                Marudka <small className="font-weight-light">Frontend Developer</small>
                            </h3>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default Navigation;
