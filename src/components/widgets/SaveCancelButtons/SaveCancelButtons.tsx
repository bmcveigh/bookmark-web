import * as React from 'react';
import {Button, Col, Row} from "reactstrap";

interface IProps {
    cancelLabel?: string;
    handleCancel: () => void;
    handleSave: () => void;
    saveLabel?: string;
}

/**
 * Component to provide generic Save and Cancel buttons.
 *
 * @param props
 * @constructor
 */
class SaveCancelButtons extends React.Component<IProps> {
    public static defaultProps = {
        cancelLabel: 'Cancel',
        saveLabel: 'Save',
    };

    public constructor(props: IProps) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
    }

    public handleCancel(event: any) {
        event.preventDefault();
        this.props.handleCancel();
    }

    public render() {
        return (
            <Row className={require('./SaveCancelButtons.scss').SaveCancelButtons}>
                <Col md={12}>
                    <Button color="success" size={"sm"} onClick={this.props.handleSave}>{this.props.saveLabel}</Button>
                    <a href="#" onClick={this.handleCancel} className="text-danger">{this.props.cancelLabel}</a>
                </Col>
            </Row>
        );
    }
}


export default SaveCancelButtons;
