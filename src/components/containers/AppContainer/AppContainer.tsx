import * as React from 'react';
import {connect} from "react-redux";
import {setIsUserLoggedIn} from "../../../store/userLogin/actions";
import AuthService from "../../auth/AuthService";
import {IPropsReduxBase} from "../../interfaces";

class AppContainer extends React.Component<IPropsReduxBase> {
    public componentWillMount(): void {
        if (this.props.dispatch) {
            this.props.dispatch(setIsUserLoggedIn(new AuthService().loggedIn()));
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
