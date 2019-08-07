import * as React from 'react';

import {connect} from "react-redux";

import {Col, Row} from "reactstrap";

import {AppState} from "../../store";
import {getCategories} from "../../store/categories/actions";

import {ICategoryData} from "../../store/categories/types";
import {thunkGetCategories} from "../../store/thunks";
import SidebarMenuContainer from "../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";
import AddCategory from "./Category/AddCategory/AddCategory";
import Category from "./Category/Category";

interface ICategoriesProps {
    thunkGetCategories?: typeof thunkGetCategories;
    categoryReducer: {
        isAddCategoryFormVisible: boolean;
    };
    payload: [];
    isAddCategoryFormVisible?: boolean;
}

function Categories(props: ICategoriesProps) {
    const output = props.payload.map((category: ICategoryData, key) => {
        return (
            <Col md={3} key={key}>
                <Category categoryTitle={category.label}/>
            </Col>
        );
    });

    return (
        <SidebarMenuContainer>
            <Row>
                {output}
                {props.categoryReducer.isAddCategoryFormVisible ? <Col md={3}><AddCategory/></Col> : null}
            </Row>
        </SidebarMenuContainer>
    );
}

const mapStateToProps = (state: AppState) => ({
    categoryReducer: state.categoryReducer
});

export default connect(
    mapStateToProps,
    getCategories
)(Categories);
