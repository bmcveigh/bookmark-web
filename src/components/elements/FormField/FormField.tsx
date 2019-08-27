import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";
import {IChangePropsBase, IKeyUpPropsBase} from "../../interfaces";

interface IProps extends IChangePropsBase, IKeyUpPropsBase {
    label: string;
    name: string;
    defaultValue?: string;
    placeholder: string;
    type: 'text' | 'textarea' | 'submit' | 'password';
}

class FormField extends React.Component<IProps> {
    public static defaultProps = {
        defaultValue: '',
        type: 'text',
    };

    public constructor(props: IProps) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    public handleKeyUp(event: any) {
        if (this.props.onKeyUp && event.which === 13) {
            this.props.onKeyUp();
        }
    }

    public render() {
        let output: any;

        switch (this.props.type) {
            default:
            case 'password':
            case 'text': {
                output = (
                    <Input
                        type={this.props.type}
                        name={this.props.name}
                        defaultValue={this.props.defaultValue}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                        onKeyUp={this.handleKeyUp}
                    />
                );
            }
        }

        return (
            <FormGroup>
                <Label for={this.props.name}>{this.props.label}</Label>
                {output}
            </FormGroup>
        );
    }
}


export default FormField;
