import * as React from 'react';
import {Container, Row} from "reactstrap";
import {getSiteConfig} from "../../../../store/siteConfig/actions";

/**
 * Component to be displayed when there are no bookmarks available.
 *
 * @constructor
 */
const NoBookmarks = () => {
    const classes = require('./NoBookmarks.scss');

    return (
        <Container className={classes.NoBookmarks}>
            <Row>
                <h2>{getSiteConfig().data.labels.BOOKMARKS_NO_BOOKMARKS_LABEL}</h2>
            </Row>
        </Container>
    );
};

export default NoBookmarks;
