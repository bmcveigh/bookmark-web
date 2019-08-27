import * as React from 'react';
import {Button, Form} from "reactstrap";
import SaveCancelButtons from "../../widgets/SaveCancelButtons/SaveCancelButtons";

interface IProps {
    children: any;
    className?: string;
    cancelButtonClick?: () => void;
    cancelButtonLabel?: string;
    submitButtonClick: () => void;
    submitButtonLabel?: string;
}

/**
 * Generic form component that can be reused throughout the app.
 */
export default class AppForm extends React.Component<IProps> {

    public static defaultProps = {
        cancelButtonLabel: 'Cancel',
        className: '',
        submitButtonLabel: 'Submit',
    };

    /**
     * Constructor to bind events to this component.
     *
     * @param props
     */
    public constructor(props: Readonly<IProps>) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
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

    public handleCancelClick() {
        if (this.props.cancelButtonClick) {
            this.props.cancelButtonClick();
        }
    }

    /**
     * Render the form.
     */
    public render() {
        const classes = require('./AppForm.scss');

        return (
            <Form className={`${this.props.className} ${classes.UserForm}`} onKeyUp={this.handleKeyUp}>
                {this.props.children}
                <Button onClick={this.props.submitButtonClick}>
                    {this.props.submitButtonLabel}
                </Button>
                <SaveCancelButtons
                    cancelLabel={this.props.cancelButtonLabel}
                    handleCancel={this.handleCancelClick}
                    handleSave={this.props.submitButtonClick}
                />
            </Form>
        );
    }
}
