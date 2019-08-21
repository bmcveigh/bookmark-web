import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";
import {IChangePropsBase} from "../../interfaces";

interface IProps extends IChangePropsBase {
    label: string;
    name: string;
    placeholder: string;
    type: 'text' | 'textarea' | 'submit' | 'password';
}

function FormField(props: IProps) {
    let output: any;

    switch (props.type) {
        default:
        case 'password':
        case 'text': {
            output = (
                <Input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            );
        }
    }

    return (
        <FormGroup>
            <Label for={props.name}>{props.label}</Label>
            {output}
        </FormGroup>
    );
}

FormField.defaultProps = {
    type: 'text',
};

export default FormField;
