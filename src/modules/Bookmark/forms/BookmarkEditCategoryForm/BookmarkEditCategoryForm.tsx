import * as React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';

import {IPropsReduxBase} from "../../../../components/interfaces";
import {IBookmarkCategory} from "../../../../store/bookmarks/types";
import BookmarkFormWidget from '../../components/BookmarkFormWidget/BookmarkFormWidget';

import FormField from 'src/components/elements/FormField/FormField';

interface IProps extends IPropsReduxBase {
    category: IBookmarkCategory;
    styles?: any;
    handleCancel: (event: any) => void;
    handleSave: () => void;
}

class BookmarkEditCategoryForm extends Component<IProps> {
    public constructor(props: IProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleCancel= this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public async handleClick(event: any) {
        event.preventDefault();
    }

    public handleChange(event: any) {
        // todo
    }

    public handleCancel(event: any) {
        this.props.handleCancel(event);
    }

    public handleSave() {
        this.props.handleSave();
    }

    public render() {
        const classes = require('./BookmarkEditCategoryForm.scss');
        const category = this.props.category;
        // const globalStyles = this.props.styles ? this.props.styles.data : {};

        return (
            <form className={classes.BookmarkEditCategoryForm}>
                <FormField
                    label="Category Name"
                    name="name"
                    defaultValue={category.name}
                    placeholder="Enter category name"
                    onChange={this.handleChange}
                />
                <FormField
                    label="Category Description"
                    name="description"
                    defaultValue={category.description}
                    placeholder="Enter category description"
                    onChange={this.handleChange}
                />
                <BookmarkFormWidget category={category}
                                    handleCancel={this.handleCancel}
                                    handleSave={this.handleSave}
                />
            </form>
        );
    }

}

// Retrieve data from store as props
function mapStateToProps(state: any) {
    return state;
}

export default connect(mapStateToProps)(BookmarkEditCategoryForm);
