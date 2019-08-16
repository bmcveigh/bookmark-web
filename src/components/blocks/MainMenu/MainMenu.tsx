import * as React from 'react';
import {Link} from "react-router-dom";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
} from 'reactstrap';

import AuthService from '../../auth/AuthService';

import {getSiteConfig} from "../../../store/siteConfig/actions";

interface IState {
    isOpen: boolean;
}

/**
 * Main menu navigation bar component using Bootstrap framework.
 */
export default class MainMenu extends React.Component<{}, IState> {
    protected Auth: AuthService;

    protected siteConfig: any;

    public constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.Auth = new AuthService();
        this.siteConfig = getSiteConfig();
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {
        const classes = require('./MainMenu.scss');

        return (
            <div>
                <Navbar
                    color="light"
                    light={true}
                    fixed="top"
                    expand="md"
                    className={classes.Navbar}
                >
                    <NavbarBrand href={"/"}>Bookmark Buddy</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar={true}>
                        <Nav className="ml-auto" navbar={true}>
                            {this.Auth.loggedIn() ? (
                                <Nav className="ml-auto" navbar={true}>
                                    <NavItem>
                                      <Link
                                          to={"/app"}
                                          className={"nav-link"}
                                      >
                                        View Bookmarks
                                      </Link>
                                    </NavItem>
                                    < NavItem >
                                    < Link
                                    to = {"/user/logout"}
                                    className={"nav-link"}
                                    >
                                        {this.siteConfig.data.labels.LOGOUT_MENU_ITEM_LABEL}
                                    </Link>
                                    </NavItem>
                                </Nav>
                                ) : (
                                <Nav className="ml-auto" navbar={true}>
                                    < NavItem >
                                        < Link
                                            to = {"/user/login"}
                                            className={"nav-link"}
                                        >
                                            {this.siteConfig.data.labels.LOGIN_MENU_ITEM_LABEL}
                                        </Link>
                                    </NavItem>
                                </Nav>
                            )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
