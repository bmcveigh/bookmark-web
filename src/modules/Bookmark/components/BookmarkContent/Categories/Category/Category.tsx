import * as React from 'react';

import { connect } from 'react-redux';

import Card from "../../../../../../components/elements/Card/Card";
import CrudButtons from "../../../../../../components/widgets/CrudButtons/CrudButtons";
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
  }

  public handleClick() {
    // todo: implement click.
  }

  public render() {
    const classes = require('./Category.scss');

    const category = this.props.category;
    const output = (
      <div>
        <BookmarkList bookmarks={category.bookmarks} />
      </div>
    );

    // if (this.state.toggleEditForm) {
    //   output = <BookmarkEditCategoryForm category={category} />;
    // }

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
            editButtonClick={this.handleClick}
            deleteButtonLabel="Delete category"
            deleteButtonId={`delete-category-${category.categoryId}`}
            deleteButtonClick={this.handleClick}
          />
        </div>
      </Card>
    );
  }

}

export default connect()(Category);
