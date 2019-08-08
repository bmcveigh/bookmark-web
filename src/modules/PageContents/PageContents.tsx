import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainMenu from "../../components/blocks/MainMenu/MainMenu";

import BookmarkListPage from "../Bookmark/pages/BookmarkListPage/BookmarkListPage";
import Homepage from "../Homepage/containers/Homepage/Homepage";
import UserThemeSettingsPage from "../Theme/pages/UserThemeSettingsPage/UserThemeSettingsPage";

function PageContents() {
    const classes = require('./PageContents.scss');

    return (
            <Router>
                <div className={classes.PageContents}>
                    <MainMenu />
                    <Route path="/" exact={true} component={Homepage} />
                    <Route path="/app" exact={true} component={BookmarkListPage} />
                    <Route path="/app/user/profile/appearance" exact={true} component={UserThemeSettingsPage} />
                </div>
            </Router>
    );
}

export default PageContents;
