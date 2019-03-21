import * as React from 'react';
import {Col, Container, Row} from "reactstrap";
import Category from "./Category/Category";

class Categories extends React.Component {
    public render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md={3}>
                        <Category/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Categories;
