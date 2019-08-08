import * as React from 'react';
import {connect} from 'react-redux';
import SidebarMenuContainer from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";
import Categories from "../../components/Categories/Categories";

function BookmarkListPage() {
  return (
      <SidebarMenuContainer>
        <Categories/>
      </SidebarMenuContainer>
  );
}

export default connect()(BookmarkListPage);
