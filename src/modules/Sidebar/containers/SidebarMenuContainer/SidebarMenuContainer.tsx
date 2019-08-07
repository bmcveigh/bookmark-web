import * as React from 'react';

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

interface ISidebarMenuContainer {
  children: object;
}

function SidebarMenuContainer(props: ISidebarMenuContainer) {
  return (
      <div>
        <SidebarMenu/>
        {props.children}
      </div>
  );
}

export default SidebarMenuContainer;
