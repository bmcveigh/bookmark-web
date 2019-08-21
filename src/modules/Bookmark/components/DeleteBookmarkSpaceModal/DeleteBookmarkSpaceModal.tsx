import * as React from 'react';
import {Component} from 'react';
import AppModal from '../../../../components/containers/AppModal/AppModal';

interface IProps {
    space: any;
}

/**
 * Popup modal component asking if user would like to delete a bookmark space.
 */
class DeleteBookmarkSpaceModal extends Component<IProps> {
    public confirmHandler() {
        // todo
    }

    public render(): React.ReactNode {
        return (
            <AppModal className="app-modal" confirmHandler={this.confirmHandler} title="Delete space">
                <span>Are you sure you would like to delete the bookmark space <em>{this.props.space.name}</em>?</span>
            </AppModal>
        );
    }
}

export default DeleteBookmarkSpaceModal;
