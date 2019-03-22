import * as React from 'react';
import { connect } from "react-redux";
import {Button} from 'reactstrap';
import {Dispatch} from "redux";

import {AppState} from "../../../store";
import {flagNewCategory} from "../../../store/categories/actions";
import {thunkAddCategory} from "../../../store/thunks";

interface IAddCategoryProps {
    addCategory?: typeof thunkAddCategory;
    categoryReducer: object;
    dispatch: Dispatch;
}

class AddCategoryBtn extends React.Component<IAddCategoryProps> {
    public handleClick = () => {
        this.props.dispatch(flagNewCategory());
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
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCategoryBtn);
