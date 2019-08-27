import * as React from 'react';
import {Button} from "reactstrap";

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
    <>
        <Button color="success" size={"sm"} onClick={props.handleSave}>{props.saveLabel}</Button>
        <a href="#" onClick={props.handleCancel} className="text-danger">{props.cancelLabel}</a>
    </>
);

SaveCancelButtons.defaultProps = {
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
};

export default SaveCancelButtons;
