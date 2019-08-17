import * as React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';

import arrayMove from 'array-move';

import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {SortableContainer as sc, SortableElement as se} from 'react-sortable-hoc';

const handleDeleteBookmarkClick = (e: any) => {
    e.preventDefault();
};

const SortableItem = se(
        // @ts-ignore
    ({index, value, props}) => {
        const classes = require('./BookmarkList.scss');

        return (
            <li
                className={classes.Bookmark}
                // style={props.userPreferenceStyles.cardLink}
            >
                <a
                    href={value.link.uri}
                    key={index}
                    target="_blank"
                    // style={props.userPreferenceStyles.cardLink}
                >
                    {value.link.title}
                </a>
                <a
                    href="#"
                    className={`${classes.DeleteBookmark} float-right`}
                    onClick={handleDeleteBookmarkClick}
                    // style={{ color: props.userPreferenceStyles.button ? props.userPreferenceStyles.button.background : {} }}
                >
                    <FontAwesomeIcon icon={faWindowClose}/>
                </a>
            </li>
        )
    },
);

// @ts-ignore
const SortableList = sc(({items, props}) => {
    return (
        <ul>
            {items ? items.map((value: any, index: number) => (
                <SortableItem key={`item-${index}`} index={index} value={value} props={props}/>
            )) : <li>No bookmarks available.</li>}
        </ul>
    );
});

class BookmarkList extends Component<any> {
    constructor(props: any) {
        super(props);

        const items = props.bookmarks;

        this.state = {
            items,
        };
    }

    // @ts-ignore
    public onSortEnd = ({oldIndex, newIndex}) => {
        // @ts-ignore
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    public shouldCancelStart(e: any) {
        // Cancel sorting if the event target is an anchor tag (`a`)
        if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'svg') {
            return true; // Return true to cancel sorting
        }
        return false;
    }

    public render() {
        return (
            <SortableList
                items={this.props.bookmarks}
                onSortEnd={this.onSortEnd}
                props={this.props}
                shouldCancelStart={this.shouldCancelStart}
                // style={this.props.userPreferenceStyles}
            />
        );
    }
}

export default connect()(BookmarkList);
