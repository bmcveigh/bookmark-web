import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainMenu from "../components/blocks/MainMenu/MainMenu";

import BookmarkListPage from "../modules/Bookmark/pages/BookmarkListPage/BookmarkListPage";
import Homepage from "../modules/Homepage/containers/Homepage/Homepage";
import UserThemeSettingsPage from "../modules/Theme/pages/UserThemeSettingsPage/UserThemeSettingsPage";
import UserLoginPage from "../modules/User/pages/UserLoginPage/UserLoginPage";
import UserProfilePage from "../modules/User/pages/UserProfilePage/UserProfilePage";

function Routes() {
    return (
            <Router>
                <div>
                    <MainMenu />
                    <Route path="/" exact={true} component={Homepage} />
                    <Route path="/user/login" exact={true} component={UserLoginPage} />
                    <Route path="/app" exact={true} component={BookmarkListPage} />
                    <Route path="/app/space/*" exact={true} component={BookmarkListPage} />
                    <Route path="/app/user/profile" exact={true} component={UserProfilePage} />
                    <Route path="/app/user/profile/appearance" exact={true} component={UserThemeSettingsPage} />
                </div>
            </Router>
    );
}

export default Routes;
