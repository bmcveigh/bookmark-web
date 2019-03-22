import * as React from 'react';

import {Col, Row} from "reactstrap";

import {AppState} from "../../store";
import Category from "./Category/Category";

import {connect} from "react-redux";
import {getCategories} from "../../store/categories/actions";
import {thunkGetCategories} from "../../store/thunks";

import { ICategoryData } from "../../store/categories/types";

interface ICategoriesProps {
    thunkGetCategories?: typeof thunkGetCategories;
    categoryReducer: {
        isAddCategoryFormVisible: boolean;
    };
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
                {this.props.categoryReducer.isAddCategoryFormVisible ? <Col md={3}><Category categoryTitle="New Category"/></Col> : null}
            </Row>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    categoryReducer: state.categoryReducer
});

export default connect(
    mapStateToProps,
    getCategories
)(Categories);
