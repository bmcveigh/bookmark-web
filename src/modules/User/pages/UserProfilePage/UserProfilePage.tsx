import * as React from 'react';
import {connect} from 'react-redux';

import Tabs from '../../../../components/elements/Tabs/Tabs';
import SidebarMenuContainer
    from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";

interface IProps {
    dispatch?: (object: any) => void;
    siteConfig?: any;
    userProfile?: any;
}

class UserProfilePage extends React.Component<IProps> {
    public render() {
        // todo: pull this data in from the back-end.
        const user: any = this.props.userProfile || {};

        const tabData = this.props.siteConfig.tabData.userProfilePages;

        if (!user.id) {
            return (
                <SidebarMenuContainer>
                    <div>Loading user profile...</div>
                </SidebarMenuContainer>
            );
        }

        return (
            <SidebarMenuContainer>
                <Tabs data={tabData}/>
                <div>{user.username}</div>
                <div>{user.email}</div>
            </SidebarMenuContainer>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        siteConfig: state.siteConfigReducer.siteConfig,
        userProfile: state.userLoginReducer.data,
    };
}

export default connect(mapStateToProps)(UserProfilePage);
