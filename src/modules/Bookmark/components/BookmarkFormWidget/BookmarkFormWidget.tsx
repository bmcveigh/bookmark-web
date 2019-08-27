import * as React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';
import {IPropsReduxBase} from "../../../../components/interfaces";
import {IBookmark, IBookmarkCategory} from "../../../../store/bookmarks/types";
import {getSiteConfig} from "../../../../store/siteConfig/actions";
import {ISiteConfig} from "../../../../store/siteConfig/types";
import BookmarkFormItem from "./BookmarkFormItem/BookmarkFormItem";

interface IProps extends IPropsReduxBase {
    category: IBookmarkCategory;
    styles?: any;
    handleCancel: () => void;
    handleSave: () => void;
}

interface IState {
    bookmarks: IBookmark[];
}

class BookmarkFormWidget extends Component<IProps, IState> {

    protected siteConfig: ISiteConfig;

    public constructor(props: IProps) {
        super(props);

        this.state = {
            bookmarks: [{
                href: 'http://',
                id: 0,
                label: '',
            }],
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.siteConfig = getSiteConfig();
    }

    public handleCancel() {
        this.props.handleCancel();
    }

    public handleSave() {
        this.props.handleSave();
    }

    public handleClick(event: any) {
        event.preventDefault();
        const bookmarks = this.state.bookmarks;
        bookmarks.push({
            href: 'http://',
            id: 0,
            label: '',
        });
        this.setState({bookmarks});
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
                {this.state.bookmarks.map((bookmark: IBookmark, key: number) => (
                    <BookmarkFormItem
                        key={`new--${key}`}
                        onChange={this.handleChange}
                        bookmark={bookmark}
                    />
                ))}
                <div>
                    <a
                        href="#"
                        onClick={this.handleClick}
                    >{this.siteConfig.data.labels.BOOKMARKS_ADD_BOOKMARK_LABEL}</a>
                </div>
            </div>
        );
    }

}

export default connect()(BookmarkFormWidget);
