import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import Categories from "../Bookmark/Categories";
import Homepage from "../Homepage/containers/Homepage/Homepage";

function PageContents() {
    const classes = require('./PageContents.scss');

    return (
        <Container fluid={true} className={classes.PageContents}>
            <Router>
                <Route path="/" exact={true} component={Homepage} />
                <Route path="/app" component={Categories} />
            </Router>
        </Container>
    );
}

export default PageContents;

