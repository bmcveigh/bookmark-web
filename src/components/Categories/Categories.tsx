import * as React from 'react';

import {Col, Row} from "reactstrap";

import {AppState} from "../../store";
import Category from "./Category/Category";

import {connect} from "react-redux";
import {getCategories} from "../../store/categories/actions";

class Categories extends React.Component {
    public render() {
        const data = getCategories();

        const output = data.payload.map((category, key) => {
            return (
                <Category key={key} />
            );
        });

        return (
            <Row>
                <Col md={3}>
                    {output}
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    category: state.category
});

export default connect(
    mapStateToProps,
    { getCategories }
)(Categories);
