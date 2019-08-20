import * as React from 'react';
import {Col, Row} from "reactstrap";
import UserLoginForm from "../../forms/UserLoginForm/UserLoginForm";

export default function UserLoginPage() {
    const classes = require(
        "./UserLoginPage.scss"
    );
    return (
        <Row className={ classes.UserLoginPage }>
            <Col md={6}>
                <UserLoginForm />
            </Col>
        </Row>
    );
}
