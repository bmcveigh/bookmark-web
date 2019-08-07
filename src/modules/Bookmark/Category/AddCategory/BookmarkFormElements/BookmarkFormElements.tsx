import * as React from 'react';
import {connect} from "react-redux";
import {Button} from "reactstrap";
import {AppState} from "../../../../../store";
import {addBookmark, loadBookmarks} from "../../../../../store/bookmarks/actions";
import {getCategories} from "../../../../../store/categories/actions";
import BookmarkFormElement from "./BookmarkFormElement/BookmarkFormElement";

interface IBookmarkFormElementsProps {
    bookmarkReducer: {
        bookmarks: []
    };
}

class BookmarkFormElements extends React.Component<IBookmarkFormElementsProps> {

    constructor(props: Readonly<any>) {
        super(props);
    }

    public componentWillMount(): void {
        loadBookmarks();
    }

    public addAnotherBookmarkClick() {
        addBookmark();
    }

    public render() {
        const output = this.props.bookmarkReducer.bookmarks.map((link: any, key: number) => {
            const hrefId = `link-href--${key}`;
            const labelId = `link-label--${key}`;

            return (
                <BookmarkFormElement
                    key={key}
                    linkElement={link}
                    hrefId={hrefId}
                    labelId={labelId}/>
            );
        });

        return (
            <div>
                {output}
                <Button
                    color={"success"}
                    onClick={this.addAnotherBookmarkClick}>Add Another Bookmark</Button>
            </div>
        );
    }

}

const mapStateToProps = (state: AppState) => ({
    bookmarkReducer: state.bookmarkReducer
});

export default connect(
    mapStateToProps,
    getCategories
)(BookmarkFormElements);
