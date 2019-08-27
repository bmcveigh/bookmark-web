import * as React from 'react';
import {connect} from "react-redux";
import {fetchUserProfile, setIsUserLoggedIn} from "../../../store/userLogin/actions";
import {FETCH_USER_PROFILE} from "../../../store/userLogin/types";
import {IPropsReduxBase} from "../../interfaces";

import AuthService from 'src/services/auth/AuthService';
import { Services } from 'src/services/services';

class AppContainer extends React.Component<IPropsReduxBase> {
    public Auth: AuthService;

    /**
     * Constructor for AppContainer.
     *
     * @param props
     */
    public constructor(props: IPropsReduxBase) {
        super(props);

        this.Auth = Services.authService();
    }

    public async componentWillMount() {
        if (this.props.dispatch) {
            this.props.dispatch(setIsUserLoggedIn(this.Auth.loggedIn()));

            if (this.Auth.loggedIn()) {
                const userProfile = await fetchUserProfile();
                this.props.dispatch({data: userProfile, type: FETCH_USER_PROFILE});
                this.props.dispatch(setIsUserLoggedIn(true));
            }
        }
    }

    public render(): React.ReactNode {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default connect()(AppContainer);
