import * as React from 'react';

import {Col, Row} from "reactstrap";

import {AppState} from "../../store";
import Category from "./Category/Category";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getCategories} from "../../store/categories/actions";
import {thunkGetCategories} from "../../store/thunks";

interface ICategoriesProps {
    thunkGetCategories?: typeof thunkGetCategories;
    categoryReducer?: object;
    payload: [];
}

class Categories extends React.Component<ICategoriesProps> {
    public render() {
        const output = this.props.payload.map((category, key) => {
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
    categoryReducer: state.categoryReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    thunkGetCategories
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    getCategories
)(Categories);
