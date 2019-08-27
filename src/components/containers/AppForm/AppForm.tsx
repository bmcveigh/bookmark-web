import * as React from 'react';
import {Form} from "reactstrap";

interface IProps {
    children: any;
    className?: string;
}

/**
 * Generic form component that can be reused throughout the app.
 */
export default class AppForm extends React.Component<IProps> {

    public static defaultProps = {
        className: '',
    };

    /**
     * Render the form.
     */
    public render() {
        const classes = require('./AppForm.scss');

        return (
            <Form className={`${this.props.className} ${classes.UserForm}`}>
                {this.props.children}
            </Form>
        );
    }
}
