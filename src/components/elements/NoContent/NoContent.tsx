import * as React from 'react';
import {Container, Row} from "reactstrap";

interface IProps {
    message: string;
}

/**
 * Component to be displayed when there are no bookmarks available.
 *
 * @constructor
 */
const NoContent = (props: IProps) => {
    const classes = require('./NoContent.scss');

    return (
        <Container className={classes.NoBookmarks}>
            <Row>
                <h2>{props.message}</h2>
            </Row>
        </Container>
    );
};

export default NoContent;
