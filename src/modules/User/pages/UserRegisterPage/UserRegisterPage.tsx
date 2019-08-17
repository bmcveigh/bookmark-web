import * as React from 'react';
import {Col, Row} from "reactstrap";
import UserRegisterForm from "../../forms/UserRegisterForm/UserRegisterForm";

export default function UserRegisterPage() {
    return (
        <Row>
            <Col md={6}>
                <UserRegisterForm />
            </Col>
        </Row>
    );
}
