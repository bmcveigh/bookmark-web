import * as React from 'react';

import { connect } from 'react-redux';
import { Form } from 'reactstrap';

import AppModal from "../../../../components/containers/AppModal/AppModal";
import FormField from "../../../../components/elements/FormField/FormField";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {addBookmarkCategory} from "../../../../store/bookmarkCategory/actions";
import {IBookmarkCategory} from "../../../../store/bookmarkCategory/types";
import {LOAD_BOOKMARKS} from "../../../../store/bookmarks/types";
import {IBookmarkSpace} from "../../../../store/bookmarkSpace/types";

interface IProps extends IPropsReduxBase {
  space: IBookmarkSpace;
}

class BookmarkAddCategoryModalForm extends React.Component<IProps, IBookmarkCategory> {

  public constructor(props: IProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public async handleClick() {
    // const params = this.props.params || {};
    // const index = params.id || 0;

    // todo: fine tune this.
    // user.bookmarkSpaces[0][index].bookmarkCategories.push({
    //   name: this.refs.name.value,
    //   description: this.refs.description.value,
    //   bookmarks: [],
    //   categoryId: Math.random().toString(36).substring(7),
    // });

    // this.props.dispatch(updateUserById(this.props.user._id, user));
    if (this.props.dispatch) {
      const category = await addBookmarkCategory(this.state.name, this.state.description, this.props.space);
      // this.props.dispatch({data: category.data, type: LOAD_BOOKMARKS});
      this.props.dispatch(category);
      this.props.dispatch({data: category.data, type: LOAD_BOOKMARKS});
    }
  }

  public handleChange(event: any) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  public render() {
    return (
      <AppModal
        className={"app-modal"}
        confirmHandler={this.handleClick}
        title="Add category"
      >
        <Form>
          <FormField
              label={"Category Name"}
              name="name"
              placeholder="Enter the category name for the bookmarks."
              onChange={this.handleChange}
          />
          <FormField
              label={"Description"}
              name="description"
              placeholder="Enter the description of the bookmark category."
              onChange={this.handleChange}
          />
        </Form>
      </AppModal>
    );
  }

}

export default connect()(BookmarkAddCategoryModalForm);
