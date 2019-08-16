import * as React from 'react';
import {Redirect} from "react-router";
import AuthService from "../../../../components/auth/AuthService";

const UserLogoutPage = () => {
    new AuthService().logout();
    return <Redirect to={"/"}/>
};

export default UserLogoutPage;
