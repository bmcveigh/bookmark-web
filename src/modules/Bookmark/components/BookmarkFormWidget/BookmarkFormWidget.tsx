import * as React from 'react';
import {Component} from 'react';

import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import FormField from "../../../../components/elements/FormField/FormField";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {IBookmark, IBookmarkCategory} from "../../../../store/bookmarks/types";
import {getSiteConfig} from "../../../../store/siteConfig/actions";

interface IProps extends IPropsReduxBase {
  category: IBookmarkCategory;
  styles?: any;
}

class BookmarkFormWidget extends Component<IProps> {

  public constructor(props: IProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleClick(event: any) {
    event.preventDefault();
  }

  public handleChange(event: any) {
    // todo
  }

  public render() {
    const classes = require('./BookmarkFormWidget.scss');
    const category = this.props.category;
    const bookmarks = category.bookmarks;
    // const globalStyles = this.props.styles ? this.props.styles.data : {};

    const output = bookmarks && bookmarks.length ? bookmarks.map((bookmark: IBookmark, key: number) => {
      return (
        <Row key={key}>
          <Col md={4}>
            <FormField
                label="Label"
                name={`label--${bookmark.id}`}
                placeholder="Label"
                onChange={this.handleChange}
            />
          </Col>
          <Col md={8}>
            <FormField
                label="URL"
                name={`href--${bookmark.id}`}
                placeholder="URL"
                onChange={this.handleChange}
            />
          </Col>
        </Row>
      );
    }) : null;

    return (
      <div className={classes.BookmarkFormWidget}>
        <h3 className={classes.BookmarkFormLabel}>Bookmarks</h3>
        <div>
          {output}
        </div>
        <div>
          <a
            href="#"
            onClick={this.handleClick}
          >{getSiteConfig().data.labels.BOOKMARKS_ADD_BOOKMARK_LABEL}</a>
        </div>
      </div>
    );
  }

}

export default connect()(BookmarkFormWidget);
