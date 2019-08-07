import * as React from 'react';

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

interface ISidebarMenuContainer {
  children: object;
}

function SidebarMenuContainer(props: ISidebarMenuContainer) {
  const classes = require('./SidebarMenuContainer.scss');

    return (
      <div className={classes.SidebarMenuContainer}>
        <SidebarMenu />
          <div className={classes.Content}>
              {props.children}
          </div>
      </div>
  );
}

export default SidebarMenuContainer;
