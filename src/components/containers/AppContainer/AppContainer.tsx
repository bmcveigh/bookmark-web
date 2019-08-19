import * as React from 'react';
import {connect} from "react-redux";
import {fetchUserProfile, setIsUserLoggedIn} from "../../../store/userLogin/actions";
import {FETCH_USER_PROFILE} from "../../../store/userLogin/types";
import AuthService from "../../auth/AuthService";
import {IPropsReduxBase} from "../../interfaces";

class AppContainer extends React.Component<IPropsReduxBase> {
    public async componentWillMount() {
        if (this.props.dispatch) {
            this.props.dispatch(setIsUserLoggedIn(new AuthService().loggedIn()));

            const userProfile = await fetchUserProfile();
            this.props.dispatch({data: userProfile, type: FETCH_USER_PROFILE});
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
