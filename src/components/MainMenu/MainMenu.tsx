import * as React from 'react';
import {Link} from "react-router-dom";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
} from 'reactstrap';

interface IState {
    isOpen: boolean;
}

/**
 * Main menu navigation bar component using Bootstrap framework.
 */
export default class MainMenu extends React.Component<{}, IState> {
    public constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <div>
                <Navbar color="light" light={true} expand="md">
                    <NavbarBrand href={"/"}>Bookmark Buddy</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>
                            <NavItem>
                                <Link
                                    to={"/user/logout"}
                                    className={"nav-link"}
                                >
                                    Logout
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
