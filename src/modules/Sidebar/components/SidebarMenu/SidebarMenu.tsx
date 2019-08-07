import * as React from 'react';

import { faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './SidebarMenu.css';

function SidebarMenu(props: any) {

  // https://codepen.io/Kamilica/pen/XRbvaL
  const links = [
    {
      faIcon: faBookmark,
      href: '/',
      label: '',
      submenuItems: [],
    },
    {
      faIcon: faUser,
      href: '/user/profile',
      label: '',
      submenuItems: [],
    },
  ];

  const output = links.map((link: any, lKey) => {
    return (
      <Link
        key={lKey}
        to={link.href}
      >
        <li
          className={"list-group-item pl-3 py-2"}
          key={`li-${lKey}`}
          // style={props.userPreferenceStyles.menuSidebarItem}
        >
          <FontAwesomeIcon icon={link.faIcon} />
          {
            link.submenuItems.length ? (
                <ul className="list-group flex-column d-inline-block submenu">
                {
                  link.submenuItems.map((submenuItem: any, smKey: any) => {
                    return (
                      <li
                        key={smKey}
                        className="list-group-item pl-4"
                      >
                        <Link to={submenuItem.href}>{submenuItem.label}</Link>
                          <ul className="list-group flex-column d-inline-block sub-submenu">
                          {
                            submenuItem.subSubmenuItems.map((subSubmenuItem: any, ssmKey: any) => {
                              return (
                                <li
                                  key={ssmKey}
                                  className="list-group-item pl-4"
                                >
                                  <Link to={subSubmenuItem.href}>{subSubmenuItem.label}</Link>
                                </li>
                              );
                            })
                          }
                        </ul>
                      </li>
                    );
                  })
                }
              </ul>
            ) : null
          }
        </li>
      </Link>
    );
  });

  return (
    <div data-component={'sidebar'}>
      <div className="sidebar">
        <ul
          className="list-group flex-column d-inline-block first-menu"
          // style={props.userPreferenceStyles.menuSidebar}
        >
          {output}
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
