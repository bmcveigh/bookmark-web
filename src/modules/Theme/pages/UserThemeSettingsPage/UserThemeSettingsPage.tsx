import * as React from 'react';

import { connect } from 'react-redux';
import Tabs from "../../../../components/elements/Tabs/Tabs";

import SidebarMenuContainer from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";
import UserThemeSettingsForm from "../../forms/UserThemeSettingsForm/UserThemeSettingsForm";

function UserThemeSettingsPage() {
  const classes = require('./UserThemeSettingsPage.scss');

  const tabData = [
      {
          href: '/app/user/profile',
          label: 'Profile'
      },
      {
          href: '/app/user/profile/appearance',
          label: 'Theme Settings'
      }
  ];

  return (
      <SidebarMenuContainer>
        <div className={classes.UserThemeSettingsPageContents}>
            <Tabs data={tabData} />
          <UserThemeSettingsForm />
        </div>
      </SidebarMenuContainer>
  );
}

export default connect()(UserThemeSettingsPage);
