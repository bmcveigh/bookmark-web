import * as React from 'react';
import {connect} from "react-redux";
import {Button} from "reactstrap";
import {AppState} from "../../../../../store";
import {getCategories} from "../../../../../store/categories/actions";
import BookmarkFormElement from "./BookmarkFormElement/BookmarkFormElement";

interface IAddCategoryState {
    linkElements?: any;
}

class BookmarkFormElements extends React.Component<{}, IAddCategoryState> {

    constructor(props: Readonly<any>) {
        super(props);
    }

    public addAnotherBookmarkClick() {
        // const linkElements = this.state.linkElements;
        //
        // if (!linkElements) {
        //     return;
        // }
        //
        // linkElements.push({
        //     href: "#",
        //     label: "Link " + linkElements.length
        // });
        // this.setState({linkElements});
    }

    public render() {
        const output = this.state.linkElements.map((link: any, key: number) => {
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
