import * as React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import AuthService from "../../../../components/auth/AuthService";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {setIsUserLoggedIn} from "../../../../store/userLogin/actions";

const UserLogoutPage = (props: IPropsReduxBase) => {
    new AuthService().logout();

    if (props.dispatch) {
        props.dispatch(setIsUserLoggedIn(false));
    }

    return <Redirect to={"/"}/>
};

export default connect()(UserLogoutPage);
