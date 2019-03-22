import * as React from 'react';
import { connect } from "react-redux";
import {Button} from 'reactstrap';
import {Dispatch} from "redux";

import {AppState} from "../../../store";
import {thunkAddCategory} from "../../../store/thunks";

interface IAddCategoryProps {
    addCategory?: typeof thunkAddCategory;
}

class AddCategoryBtn extends React.Component<IAddCategoryProps> {
    public handleClick = () => {
        thunkAddCategory();
    };

    public render() {
        return (
            <Button
                onClick={this.handleClick}
                color="primary">Add Category</Button>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    categoryReducer: state.categoryReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    thunkAddCategory
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCategoryBtn);
