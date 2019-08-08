import * as React from 'react';
import {connect} from 'react-redux';
import SidebarMenuContainer from "../../../Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer";

import BookmarkContent from "../../components/BookmarkContent/BookmarkContent";

function BookmarkListPage() {
  return (
      <SidebarMenuContainer>
        <BookmarkContent />
      </SidebarMenuContainer>
  );
}

export default connect()(BookmarkListPage);
