import * as React from 'react';
import {Button, Form} from "reactstrap";

interface IProps {
    children: any;
    submitButtonClick: () => void;
    submitButtonLabel: string;
}

/**
 * Generic form component related to users.
 */
export default class UserForm extends React.Component<IProps> {

    /**
     * Constructor to bind events to this component.
     *
     * @param props
     */
    public constructor(props: Readonly<IProps>) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    /**
     * Submit the form when the user clicks the enter key.
     *
     * @param event
     */
    public handleKeyUp(event: any) {
        if (event.which === 13) {
            this.props.submitButtonClick();
        }
    }

    /**
     * Render the form.
     */
    public render() {
        const classes = require('./UserForm.scss');

        return (
            <Form className={classes.UserForm} onKeyUp={this.handleKeyUp}>
                {this.props.children}
                <Button onClick={this.props.submitButtonClick}>
                    {this.props.submitButtonLabel}
                </Button>
            </Form>
        );
    }
}
