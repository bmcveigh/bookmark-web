import React, { Component } from 'react';

import { connect } from 'react-redux';

import arrayMove from 'array-move';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import classes from './BookmarkList.css';

import { SortableContainer as sc, SortableElement as se } from 'react-sortable-hoc';

const handleDeleteBookmarkClick = (e, bookmark, props) => {
  e.preventDefault();
};

const SortableItem = se(
    ({ index, value, props }) => (
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
        onClick={(e) => handleDeleteBookmarkClick(e, value, props)}
        // style={{ color: props.userPreferenceStyles.button ? props.userPreferenceStyles.button.background : {} }}
      >
        <FontAwesomeIcon icon={faWindowClose} />
      </a>
    </li>
  ),
);

const SortableList = sc(({ items, props }) => {
  return (
    <ul>
      {items ? items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} props={props} />
      )) : <li>No bookmarks available.</li>}
    </ul>
  );
});

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    const items = props.bookmarks;

    this.state = {
      items,
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  shouldCancelStart(e) {
    // Cancel sorting if the event target is an anchor tag (`a`)
    if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'svg') {
      return true; // Return true to cancel sorting
    }
    return false;
  }

  render() {
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
