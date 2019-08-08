import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import MainMenu from "../../components/blocks/MainMenu/MainMenu";

import Categories from "../Bookmark/Categories";
import Homepage from "../Homepage/containers/Homepage/Homepage";

function PageContents() {
    const classes = require('./PageContents.scss');

    return (
            <Router>
                <MainMenu />
                <Container fluid={true} className={classes.PageContents}>
                    <Route path="/" exact={true} component={Homepage} />
                    <Route path="/app" component={Categories} />
                </Container>
            </Router>
    );
}

export default PageContents;
