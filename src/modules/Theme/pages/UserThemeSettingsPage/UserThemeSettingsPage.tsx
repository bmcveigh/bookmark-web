import * as React from 'react';

import { connect } from 'react-redux';

import SidebarMenuContainer from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";
import UserThemeSettingsForm from "../../forms/UserThemeSettingsForm/UserThemeSettingsForm";

function UserThemeSettingsPage() {
  return (
    <SidebarMenuContainer>
      <UserThemeSettingsForm />
    </SidebarMenuContainer>
  );
}

export default connect()(UserThemeSettingsPage);
