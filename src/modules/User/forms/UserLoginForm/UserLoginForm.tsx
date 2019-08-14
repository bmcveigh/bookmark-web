import * as React from 'react';
import {Component} from "react";
import {Alert, Button, Form, FormGroup, Input} from "reactstrap";
import {callApi} from "../../../../store";
import {getSiteConfig} from "../../../../store/siteConfig/actions";

interface IState {
    labels: any;
    error: string;
    username: string;
    password: string;
    isLoginSuccessful: boolean;
}

export default class UserLoginForm extends Component<{}, IState> {
    public constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            error: '',
            isLoginSuccessful: false,
            labels: getSiteConfig().data.labels,
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

    public handleClick() {
        // todo: put this request in redux.
        const formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', '8c730f21-4d34-42ea-aba6-e26f8470beb4');
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('scope', 'authenticated');

        const self = this;
        callApi('oauth/token', {
            body: formData,
            method: 'POST',
        })
            .catch(error => self.setState({error: error.message}))
            .then(() => self.setState({isLoginSuccessful: true}));
    }

    public render() {
        return (
            <Form>
                {this.state.error.length
                    ? <Alert color="danger">{this.state.error}</Alert>
                    : null}
                {this.state.isLoginSuccessful
                    ? <Alert color="success">{this.state.labels.LOGIN_SUCCESS_LABEL}</Alert>
                    : null}
                <h3>{this.state.labels.LOGIN_PAGE_LABEL}</h3>
                <FormGroup>
                    <Input type="text" name="username" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" onChange={this.handleChange} />
                </FormGroup>
                <Button onClick={this.handleClick}>
                    {this.state.labels.LOGIN_BUTTON_LABEL}
                </Button>
            </Form>
        );
    }
}
