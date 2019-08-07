import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import Categories from "../Bookmark/Categories";
import Homepage from "../Homepage/containers/Homepage/Homepage";

import './PageContents.css';

function PageContents() {
    return (
        <Container fluid={true} className="page-contents">
            <h1>Bookmarks</h1>
            <Router>
                <Route path="/" exact={true} component={Homepage} />
                <Route path="/app" component={Categories} />
            </Router>
        </Container>
    );
}

export default PageContents;
