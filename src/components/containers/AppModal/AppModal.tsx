import * as React from 'react';

import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

import CustomButton from '../../elements/Button/Button';

interface IAppModalProps {
    children: any;
    className: string;
    confirmHandler: () => void;
    title: string;
}

interface IAppModalState {
    modal: boolean;
}

class AppModal extends React.Component<IAppModalProps, IAppModalState> {
    public constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    public componentWillMount(): void {
        this.setState({modal: false});
    }

    public handleClick() {
        this.props.confirmHandler();
        this.setState({modal: false});
    }

    /**
     * Trigger modal confirmation when user hits enter key.
     *
     * @param event
     */
    public handleKeyUp(event: any) {
        // Handle case where user hits the Enter key.
        if (event.which === 13) {
            this.handleClick();
        }
    }

    public toggle(): void {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    public render() {
        const classes = require('./AppModal.scss');

        return (
            <span>
                <CustomButton click={this.toggle}>
                    {this.props.title}
                </CustomButton>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={`${classes.AppModal} ${this.props.className}`}
                    onKeyUp={this.handleKeyUp}
                >
                  <ModalHeader
                      className={classes.ModalHeader}
                      toggle={this.toggle}
                  >
                    {this.props.title}
                  </ModalHeader>
                  <ModalBody className={classes.ModalBody}>
                    {this.props.children}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.handleClick}>Done</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default AppModal;
