import * as React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {setIsUserLoggedIn} from "../../../../store/userLogin/actions";

import { Services } from 'src/services/services';

const UserLogoutPage = (props: IPropsReduxBase) => {
    Services.authService().logout();

    if (props.dispatch) {
        props.dispatch(setIsUserLoggedIn(false));
    }

    return <Redirect to={"/"}/>
};

export default connect()(UserLogoutPage);
