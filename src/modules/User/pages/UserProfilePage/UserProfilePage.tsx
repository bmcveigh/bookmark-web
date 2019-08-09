import * as React from 'react';
import { connect } from 'react-redux';

import Tabs from '../../../../components/elements/Tabs/Tabs';
import SidebarMenuContainer
  from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";

function UserProfilePage(props: any) {
  // todo: pull this data in from the back-end.
  const user = {
    email: 'bsmith@example.com',
    username: 'bsmith',
  };

  const tabData = props.siteConfig.tabData.userProfilePages;

  return (
    <SidebarMenuContainer>
      <Tabs data={tabData} />
        <div>{user.username}</div>
        <div>{user.email}</div>
    </SidebarMenuContainer>
  );
}

function mapStateToProps(state: any) {
  return {
    siteConfig: state.siteConfigReducer.siteConfig,
  };
}

export default connect(mapStateToProps)(UserProfilePage);
