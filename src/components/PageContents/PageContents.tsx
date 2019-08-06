import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';

import Categories from '../Categories/Categories';

function PageContents() {
    return (
        <Container fluid={true}>
            <h1>Bookmarks</h1>
            <Router>
                <div>
                    <Route path="/" component={Categories}/>
                </div>
            </Router>
        </Container>
    );
}

export default PageContents;
