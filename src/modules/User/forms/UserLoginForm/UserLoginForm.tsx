import * as React from 'react';
import {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Alert} from "reactstrap";
import FormField from "../../../../components/elements/FormField/FormField";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {getSiteConfig} from "../../../../store/siteConfig/actions";

import AuthService from '../../../../components/auth/AuthService';
import {setIsUserLoggedIn} from "../../../../store/userLogin/actions";
import UserForm from "../UserForm/UserForm";

interface IState {
    labels: any;
    error: string;
    username: string;
    password: string;
    isLoginSuccessful: boolean;
}

class UserLoginForm extends Component<IPropsReduxBase, IState> {
    protected siteConfig: any;

    public constructor(props: any, context: any) {
        super(props, context);

        this.siteConfig = getSiteConfig();

        this.state = {
            error: '',
            isLoginSuccessful: false,
            labels: this.siteConfig.data.labels,
            password: '',
            username: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleChange(event: any) {
        const state = this.state || {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    public async handleClick() {
        if (this.props.dispatch) {
            const response: any = await new AuthService().login(this.state.username, this.state.password);

            if (response && response.message) {
                this.setState({error: response.message});
            }
            else if (response && response.access_token) {
                this.setState({isLoginSuccessful: true});

                if (this.props.dispatch) {
                    this.props.dispatch(setIsUserLoggedIn(true));
                }
            }
        }
    }

    public render() {
        return (
            <UserForm submitButtonClick={this.handleClick} submitButtonLabel={this.state.labels.LOGIN_BUTTON_LABEL}>
                {this.state.error.length
                    ? <Alert color="danger">{this.state.error}</Alert>
                    : null}
                {this.state.isLoginSuccessful
                    ? (
                        <div>
                            <Alert color="success">{this.state.labels.LOGIN_SUCCESS_LABEL}</Alert>
                            <Redirect to = {"/app"} />
                        </div>
                    )
                    : null}
                <h3>{this.state.labels.LOGIN_PAGE_LABEL}</h3>
                <FormField
                    label={this.siteConfig.data.labels.USER_USERNAME_LABEL}
                    name={"username"}
                    onChange={this.handleChange}
                    placeholder={this.state.labels.USER_USERNAME_PLACEHOLDER_LABEL}
                />
                <FormField
                    label={this.siteConfig.data.labels.USER_PASSWORD_LABEL}
                    name={"password"}
                    onChange={this.handleChange}
                    placeholder={this.state.labels.USER_PASSWORD_PLACEHOLDER_LABEL}
                    type="password"
                />
            </UserForm>
        );
    }
}

export default connect()(UserLoginForm);
