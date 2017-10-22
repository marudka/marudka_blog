import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Contact from "./Contact.jsx";
import Navigation from "./Navigation.jsx";

function Template() {
    return (
        <div className="bg-light">
            <Navigation />
            <Container>
                <Row>
                    <Col sm="12" md="8">
                        <Breadcrumb>
                            <BreadcrumbItem active>Home</BreadcrumbItem>
                        </Breadcrumb>
                        <main>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/login" component={Login} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </main>
                    </Col>
                    <Col sm="12" md="4">
                        <h3>Zdanie o mnie</h3>
                        <h3>Chmurka tagów</h3>
                        <h3>Archiwum</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Template;
