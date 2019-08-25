import * as React from 'react';

import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import MainMenu from "../components/blocks/MainMenu/MainMenu";

import BookmarkListPage from "../modules/Bookmark/pages/BookmarkListPage/BookmarkListPage";
import Homepage from "../modules/Homepage/containers/Homepage/Homepage";
import UserThemeSettingsPage from "../modules/Theme/pages/UserThemeSettingsPage/UserThemeSettingsPage";
import UserLoginPage from "../modules/User/pages/UserLoginPage/UserLoginPage";
import UserLogoutPage from "../modules/User/pages/UserLogoutPage/UserLogoutPage";
import UserProfilePage from "../modules/User/pages/UserProfilePage/UserProfilePage";
import UserRegisterPage from "../modules/User/pages/UserRegisterPage/UserRegisterPage";

import { Services } from 'src/services/services';

function Routes() {
    return (
            <Router>
                <div>
                    <MainMenu />

                    {
                        !(Services.authService().loggedIn()) && window.location.pathname.indexOf('/app') > -1 ?
                        <Redirect to={"/user/login"} /> : null
                    }
                    }
                    <Route path="/" exact={true} component={Homepage} />
                    <Route path="/user/login" exact={true} component={UserLoginPage} />
                    <Route path="/user/logout" exact={true} component={UserLogoutPage} />
                    <Route path="/user/register" exact={true} component={UserRegisterPage} />
                    <Route path="/app" exact={true} component={BookmarkListPage} />
                    <Route path="/app/space/*" exact={true} component={BookmarkListPage} />
                    <Route path="/app/user/profile" exact={true} component={UserProfilePage} />
                    <Route path="/app/user/profile/appearance" exact={true} component={UserThemeSettingsPage} />
                </div>
            </Router>
    );
}

export default Routes;
