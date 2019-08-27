import * as React from 'react';
import {Button, Col, Row} from "reactstrap";

interface IProps {
    cancelLabel?: string;
    handleCancel: (event: any) => void;
    handleSave: () => void;
    saveLabel?: string;
}

/**
 * Component to provide generic Save and Cancel buttons.
 *
 * @param props
 * @constructor
 */
const SaveCancelButtons = (props: IProps) => (
    <Row className={require('./SaveCancelButtons.scss').SaveCancelButtons}>
        <Col md={12}>
            <Button color="success" size={"sm"} onClick={props.handleSave}>{props.saveLabel}</Button>
            <a href="#" onClick={props.handleCancel} className="text-danger">{props.cancelLabel}</a>
        </Col>
    </Row>
);

SaveCancelButtons.defaultProps = {
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
};

export default SaveCancelButtons;
