import * as React from 'react';
import {connect} from "react-redux";
import {Container} from "reactstrap";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {setIsUserLoggedIn} from "../../../../store/userLogin/actions";

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

import { Services } from 'src/services/services';

interface IProps extends IPropsReduxBase {
  children: object;
}

class SidebarMenuContainer extends React.Component<IProps> {
    public componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
        if (this.props.dispatch) {
            this.props.dispatch(setIsUserLoggedIn(Services.authService().loggedIn()));
        }
    }

    public render() {
        const classes = require('./SidebarMenuContainer.scss');

        return (
            <div className={classes.SidebarMenuContainer}>
                <SidebarMenu/>
                <Container fluid={true} className={`${classes.Content}`}>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

export default connect()(SidebarMenuContainer);
