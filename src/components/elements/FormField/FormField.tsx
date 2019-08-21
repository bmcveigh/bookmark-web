import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

interface IProps {
    label: string;
    name: string;
    onChange: (event: any) => void;
    placeholder: string;
    type: 'text' | 'textarea' | 'submit' | 'password';
}

function FormField(props: IProps) {
    let output: any;

    switch (props.name) {
        default:
        case 'password':
        case 'text': {
            output = (
                <Input
                    type="text"
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