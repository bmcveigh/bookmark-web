import * as React from 'react';
import {connect} from "react-redux";
import {FormGroup, Input, Label} from "reactstrap";
import {getSiteConfig} from "../../../../store/siteConfig/actions";
import UserForm from "../UserForm/UserForm";

class UserRegisterForm extends React.Component {
    protected siteConfig: any;

    public constructor(props: any) {
        super(props);

        this.siteConfig = getSiteConfig().data;
    }

    public handleChange() {
        // todo
    }

    public handleClick() {
        // todo
    }

    public render(): React.ReactNode {
        return (
            <UserForm
                submitButtonLabel={this.siteConfig.labels.LOGIN_BUTTON_LABEL}
                submitButtonClick={this.handleClick}
            >
                <h3>{this.siteConfig.labels.REGISTRATION_PAGE_LABEL}</h3>
                <FormGroup>
                    <Label for="firstName">{this.siteConfig.labels.REGISTRATION_FIRST_NAME_LABEL}</Label>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder={this.siteConfig.labels.USER_USERNAME_PLACEHOLDER_LABEL}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">{this.siteConfig.labels.REGISTRATION_LAST_NAME_LABEL}</Label>
                    <Input
                        type="text"
                        name="lastName"
                        placeholder={this.siteConfig.labels.USER_USERNAME_PLACEHOLDER_LABEL}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="username">{this.siteConfig.labels.USER_USERNAME_LABEL}</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder={this.siteConfig.labels.USER_USERNAME_PLACEHOLDER_LABEL}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">{this.siteConfig.labels.USER_PASSWORD_LABEL}</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder={this.siteConfig.labels.USER_PASSWORD_PLACEHOLDER_LABEL}
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </UserForm>
        );
    }
}

export default connect()(UserRegisterForm);
