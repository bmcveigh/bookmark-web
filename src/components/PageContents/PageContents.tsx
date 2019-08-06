import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import Homepage from "../pages/Homepage/containers/Homepage/Homepage";

function PageContents() {
    return (
        <Container fluid={true}>
            <h1>Bookmarks</h1>
            <Router>
                <div>
                    <Route path="/" component={Homepage}/>
                </div>
            </Router>
        </Container>
    );
}

export default PageContents;
