import * as React from 'react';

interface IBookmarkTableRowProps {
    categoryName: string;
    href: string;
    label: string;
}

/**
 * Component representing a bookmark row in the table view.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const BookmarkTableRow = (props: IBookmarkTableRowProps) => (
  <tr>
    <td>
      <a
        href={props.href}
        target="_blank"
      >
        {props.label}
      </a>
    </td>
    <td>{props.categoryName}</td>
  </tr>
);

export default BookmarkTableRow;
