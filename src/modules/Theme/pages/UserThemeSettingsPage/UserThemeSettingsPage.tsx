import * as React from 'react';

import { connect } from 'react-redux';

import SidebarMenuContainer from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";
import UserThemeSettingsForm from "../../forms/UserThemeSettingsForm/UserThemeSettingsForm";

function UserThemeSettingsPage() {
  const classes = require('./UserThemeSettingsPage.scss');

  return (
      <SidebarMenuContainer>
        <div className={classes.UserThemeSettingsPageContents}>
          <UserThemeSettingsForm />
        </div>
      </SidebarMenuContainer>
  );
}

export default connect()(UserThemeSettingsPage);
