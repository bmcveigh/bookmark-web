import * as React from 'react';
import {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Alert, Button, Form, FormGroup, Input} from "reactstrap";
import {getSiteConfig} from "../../../../store/siteConfig/actions";
import {authenticateUser} from "../../../../store/userLogin/actions";

interface IProps {
    dispatch?: (data: any) => void;
}

interface IState {
    labels: any;
    error: string;
    username: string;
    password: string;
    isLoginSuccessful: boolean;
}

class UserLoginForm extends Component<IProps, IState> {
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

    public async handleClick() {
        if (this.props.dispatch) {
            const response: any = await authenticateUser(this.state.username, this.state.password);
            this.props.dispatch(response);

            if (response.data && response.data.message) {
                this.setState({error: response.data.message});
            }
            else if (response.data && response.data.access_token) {
                this.setState({isLoginSuccessful: true});
            }
        }
    }

    public render() {
        return (
            <Form>
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
                <FormGroup>
                    <Input type="text" name="username" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" onChange={this.handleChange}/>
                </FormGroup>
                <Button onClick={this.handleClick}>
                    {this.state.labels.LOGIN_BUTTON_LABEL}
                </Button>
            </Form>
        );
    }
}

export default connect()(UserLoginForm);
