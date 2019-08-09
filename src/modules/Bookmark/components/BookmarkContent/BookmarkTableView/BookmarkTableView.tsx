import * as React from 'react';

import { connect } from 'react-redux';

import { Col, Row, Table } from 'reactstrap';

import BookmarkTableRow from './BookmarkTableRow/BookmarkTableRow';

interface ICategory {
  bookmarks: object[];
  name: string;
}

interface IBookmark {
  href: string;
  label: string;
  name: string;
}

function BookmarkTableView() {
  // const userPreferenceStyles = props.userPreferenceStyles || {};
  const classes = require('./BookmarkTableView.scss');

  // todo: retrieve the actual bookmark categories from the back-end.
  const bookmarkCategories: object[] = [
    {
      bookmarks: [
        {
          categoryName: 'Search',
          href: 'https://www.google.com',
          label: 'Google',
        },
        {
          categoryName: 'Search',
          href: 'https://www.yahoo.com',
          label: 'Yahoo',
        },
      ]
    }
  ];

  return (
    <Row>
      <Col md={12} className={classes.BookmarkTableView}>
        <Table>
          <thead>
            <tr /*style={userPreferenceStyles.cardHeading}*/>
              <th>Bookmark</th>
              <th>Bookmark Category</th>
            </tr>
          </thead>
          <tbody>
          {
            bookmarkCategories.map((category: ICategory) => {
              return category.bookmarks.map((bookmark: IBookmark, key) => {
                if (!bookmark.label) {
                  return null;
                }

                return (
                  <BookmarkTableRow
                    key={key}
                    href={bookmark.href}
                    label={bookmark.label}
                    categoryName={category.name}
                  />
                );
              });
            })
          }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default connect()(BookmarkTableView);
