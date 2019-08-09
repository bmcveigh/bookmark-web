import * as React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

interface ITabsProps {
  data: any;
}

interface ITabsItem {
  href: string;
  label: string;
}

function Tabs(props: ITabsProps) {
  const classes = require('./Tabs.scss');
  const t = classes.tabs;
  const tItem = classes['tabs-item'];

  // const tabs = {};

  return (
    <div className={t}>
      {
        props.data.map((item: ITabsItem, key: number) => {
          const isSelected = window.location.pathname === item.href;

          return (
            <Link
              to={item.href} className={`${tItem} ${isSelected ? classes['is-selected'] : ''}`}
              key={key}
              // style={isSelected ? tabs.selected : tabs.notSelected}
            >
              {item.label}
            </Link>
          );
        })
      }
    </div>
  );
}

export default connect()(Tabs);
