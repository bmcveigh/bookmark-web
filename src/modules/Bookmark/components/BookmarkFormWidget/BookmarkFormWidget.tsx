import * as React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';
import {IPropsReduxBase} from "../../../../components/interfaces";
import SaveCancelButtons from "../../../../components/widgets/SaveCancelButtons/SaveCancelButtons";
import {addBookmarks} from "../../../../store/bookmarks/actions";
import {IAddBookmarksPayload, IBookmark, IBookmarkCategory} from "../../../../store/bookmarks/types";
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
    formStateValues: any;
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
            formStateValues: {},
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.siteConfig = getSiteConfig();
    }

    public handleCancel() {
        this.props.handleCancel();
    }

    /**
     * Save bookmark data when user clicks the Save button.
     */
    public async handleSave() {
        // todo: save state to the database.
        const formStateValues = this.state.formStateValues;

        const payload: IAddBookmarksPayload = {data: [], categoryId: this.props.category.id};

        Object.keys(formStateValues).map((key: string) => {
            if (key.indexOf('href') > -1) {
                const labelKey = key.replace('href', 'label');

                payload.data.push({
                    href: formStateValues[key],
                    id: 0,
                    label: formStateValues[labelKey] || '',
                });
            }
        });

        if (this.props.dispatch) {
            this.props.dispatch(await addBookmarks(payload));
        }

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

    /**
     * Change handler to update user bookmark values to the state.
     *
     * @param event
     */
    public handleChange(event: any) {
        const formStateValues = {
            formStateValues: this.state.formStateValues,
        };
        formStateValues.formStateValues[event.target.name] = event.target.value;
        this.setState(formStateValues);
    }

    public handleKeyUp(event: any) {
        if (event.which === 13) {
            this.handleSave();
        }
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
            <div className={classes.BookmarkFormWidget} onKeyUp={this.handleKeyUp}>
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
                <SaveCancelButtons handleCancel={this.handleCancel} handleSave={this.handleSave} />
            </div>
        );
    }

}

export default connect()(BookmarkFormWidget);
