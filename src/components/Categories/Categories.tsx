import * as React from 'react';
import {Col, Row} from "reactstrap";
import Category from "./Category/Category";

class Categories extends React.Component {
    public render() {
        return (
            <Row>
                <Col md={3}>
                    <Category/>
                </Col>
            </Row>
        );
    }
}

export default Categories;
