import * as React from 'react';
import {Form} from "reactstrap";

export default function UserForm(props: any) {
    const classes = require('./UserForm.scss');

    return (
        <Form className={classes.UserForm}>
            {props.children}
        </Form>
    );
}
