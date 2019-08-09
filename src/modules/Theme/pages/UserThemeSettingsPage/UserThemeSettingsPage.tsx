import * as React from 'react';

import {connect} from 'react-redux';

import SidebarMenuContainer from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";
import UserThemeSettingsForm from "../../forms/UserThemeSettingsForm/UserThemeSettingsForm";

import Tabs from "../../../../components/elements/Tabs/Tabs";

function UserThemeSettingsPage(props: any) {
    const siteConfig = props.siteConfig;

    return (
        <SidebarMenuContainer>
            <div>
                <Tabs data={siteConfig.tabData.userProfilePages}/>
                <UserThemeSettingsForm/>
            </div>
        </SidebarMenuContainer>
    );
}

function mapStateToProps(state: any) {
    return {
        siteConfig: state.siteConfigReducer.siteConfig,
    };
}

export default connect(mapStateToProps)(UserThemeSettingsPage);
