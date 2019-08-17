import * as React from 'react';
import {Col, Row} from "reactstrap";
import UserLoginForm from "../../forms/UserLoginForm/UserLoginForm";

export default function UserLoginPage() {
    return (
        <Row>
            <Col md={6}>
                <UserLoginForm />
            </Col>
        </Row>
    );
}
