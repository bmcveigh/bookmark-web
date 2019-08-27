import * as React from 'react';

import {connect} from 'react-redux';

import Card from "../../../../../../components/elements/Card/Card";
import CrudButtons from "../../../../../../components/widgets/CrudButtons/CrudButtons";
import BookmarkEditCategoryForm from "../../../../forms/BookmarkEditCategoryForm/BookmarkEditCategoryForm";
import BookmarkList from './BookmarkList/BookmarkList';

interface ICategoryProps {
    category: any;
}

interface ICategoryState {
    toggleEditForm: boolean;
}

class Category extends React.Component<ICategoryProps, ICategoryState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            toggleEditForm: false,
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public handleEditClick() {
        this.setState({toggleEditForm: !this.state.toggleEditForm});
    }

    public handleDeleteClick() {
        // todo
    }

    /**
     * Click handler when user cancels adding categories/bookmarks.
     *
     * @param event
     */
    public handleCancel(event: any) {
        event.preventDefault();
        this.setState({toggleEditForm: false});
    }

    /**
     * Click handler when user saves adding categories/bookmarks.
     *
     * @param event
     */
    public handleSave() {
        // todo
    }

    public render() {
        const classes = require('./Category.scss');

        const category = this.props.category;
        const output = this.state.toggleEditForm ? (
            <BookmarkEditCategoryForm
                category={category}
                handleCancel={this.handleCancel}
                handleSave={this.handleSave}
            />
        ) : (
            <div>
                <BookmarkList bookmarks={category.bookmarks}/>
            </div>
        );

        return (
            <Card
                cardHeading={category.name}
                cardWidth={this.state.toggleEditForm ? 6 : 3}
                className={classes.BookmarkCategory}
                helpText={category.description || ''}
            >
                {output}
                <div className={classes.BookmarkCategoryActions}>
                    <CrudButtons
                        editButtonLabel="Edit category"
                        editButtonId={`edit-category-${category.categoryId}`}
                        editButtonClick={this.handleEditClick}
                        deleteButtonLabel="Delete category"
                        deleteButtonId={`delete-category-${category.categoryId}`}
                        deleteButtonClick={this.handleDeleteClick}
                    />
                </div>
            </Card>
        );
    }

}

export default connect()(Category);
