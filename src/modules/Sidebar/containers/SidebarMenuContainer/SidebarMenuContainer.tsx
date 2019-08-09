import * as React from 'react';
import {Container} from "reactstrap";

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

interface ISidebarMenuContainer {
  children: object;
}

function SidebarMenuContainer(props: ISidebarMenuContainer) {
  const classes = require('./SidebarMenuContainer.scss');

    return (
      <div className={classes.SidebarMenuContainer}>
        <SidebarMenu />
        <Container fluid={true} className={`${classes.Content}`}>
          {props.children}
        </Container>
      </div>
  );
}

export default SidebarMenuContainer;
