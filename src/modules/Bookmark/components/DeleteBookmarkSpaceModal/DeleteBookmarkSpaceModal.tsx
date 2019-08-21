import * as React from 'react';
import {Component} from 'react';
import {connect} from "react-redux";
import AppModal from '../../../../components/containers/AppModal/AppModal';
import {IPropsReduxBase} from "../../../../components/interfaces";
import {deleteBookmarkSpace, fetchBookmarks} from "../../../../store/bookmarks/actions";

interface IProps extends IPropsReduxBase {
    space: any;
}

/**
 * Popup modal component asking if user would like to delete a bookmark space.
 */
class DeleteBookmarkSpaceModal extends Component<IProps> {
    constructor(props: Readonly<IProps>) {
        super(props);

        this.confirmHandler = this.confirmHandler.bind(this);
    }

    /**
     * Deletes a bookmark space upon confirmation.
     */
    public async confirmHandler() {
        if (this.props.dispatch) {
            this.props.dispatch(await deleteBookmarkSpace(this.props.space.id));
            this.props.dispatch(await fetchBookmarks());
        }
    }

    public render(): React.ReactNode {
        return (
            <AppModal className="app-modal" confirmHandler={this.confirmHandler} title="Delete space">
                <span>Are you sure you would like to delete the bookmark space <em>{this.props.space.name}</em>?</span>
            </AppModal>
        );
    }
}

export default connect()(DeleteBookmarkSpaceModal);
