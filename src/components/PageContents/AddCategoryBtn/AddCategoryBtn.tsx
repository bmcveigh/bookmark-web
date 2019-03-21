import * as React from 'react';
import { connect } from "react-redux";
import {Button} from 'reactstrap';
import {addCategory} from "../../../store/categories/actions";

import {AppState} from "../../../store";

interface IAddCategoryProps {
    addCategory: typeof addCategory;
}

class AddCategoryBtn extends React.Component<IAddCategoryProps> {
    public render() {
        return (
            <Button
                color="primary">Add Category</Button>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    category: state.category
});

export default connect(
    mapStateToProps,
    { addCategory }
)(AddCategoryBtn);
