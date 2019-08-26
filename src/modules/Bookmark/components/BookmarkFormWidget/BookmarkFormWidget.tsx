import * as React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';
import {IPropsReduxBase} from "../../../../components/interfaces";
import {IBookmark, IBookmarkCategory} from "../../../../store/bookmarks/types";
import {getSiteConfig} from "../../../../store/siteConfig/actions";
import BookmarkFormItem from "./BookmarkFormItem/BookmarkFormItem";

interface IProps extends IPropsReduxBase {
    category: IBookmarkCategory;
    styles?: any;
}

interface IState {
    displayAddBookmarkForm: boolean;
}

class BookmarkFormWidget extends Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);

        this.state = {
            displayAddBookmarkForm: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public handleClick(event: any) {
        event.preventDefault();
        this.setState({displayAddBookmarkForm: !this.state.displayAddBookmarkForm})
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
                <BookmarkFormItem
                    key={key}
                    bookmark={bookmark}
                    onChange={this.handleChange}
                />
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
                {this.state.displayAddBookmarkForm ? <BookmarkFormItem onChange={this.handleChange} /> : null}
            </div>
        );
    }

}

export default connect()(BookmarkFormWidget);
