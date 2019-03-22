import * as React from 'react';

import {Col, Row} from "reactstrap";

import {AppState} from "../../store";
import Category from "./Category/Category";

import {connect} from "react-redux";
import {Dispatch} from "redux";
import {getCategories} from "../../store/categories/actions";
import {thunkGetCategories} from "../../store/thunks";

import { ICategoryData } from "../../store/categories/types";

interface ICategoriesProps {
    thunkGetCategories?: typeof thunkGetCategories;
    categoryReducer?: object;
    payload: [];
    isAddCategoryFormVisible?: boolean;
}

class Categories extends React.Component<ICategoriesProps> {
    public render() {
        const output = this.props.payload.map((category: ICategoryData, key) => {
            return (
                <Col md={3} key={key}>
                    <Category categoryTitle={category.label} />
                </Col>
            );
        });

        return (
            <Row>
                {output}
                {this.props.isAddCategoryFormVisible ? <Category categoryTitle="New Category"/> : null}
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
