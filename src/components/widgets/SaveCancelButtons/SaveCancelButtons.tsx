import * as React from 'react';
import {Button} from "reactstrap";

interface IProps {
    cancelLabel?: string;
    handleCancel: (event: any) => void;
    handleSave: () => void;
    saveLabel?: string;
}

const SaveCancelButtons = (props: IProps) => (
    <>
        <Button color={"primary"} onClick={props.handleSave}>{props.saveLabel}</Button>
        <a href="#" onClick={props.handleCancel}>{props.cancelLabel}</a>
    </>
);

SaveCancelButtons.defaultProps = {
    cancelLabel: 'Cancel',
    saveLabel: 'Save',
};

export default SaveCancelButtons;
