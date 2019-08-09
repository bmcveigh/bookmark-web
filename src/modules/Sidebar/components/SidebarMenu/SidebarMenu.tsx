import * as React from 'react';

import { faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SidebarMenu(props: any) {
  const classes = require('./SidebarMenu.scss');


  // https://codepen.io/Kamilica/pen/XRbvaL
  const links = [
    {
      faIcon: faBookmark,
      href: '/app',
      label: '',
      submenuItems: [],
    },
    {
      faIcon: faUser,
      href: '/app/user/profile',
      label: '',
      submenuItems: [],
    },
  ];

  const output = links.map((link, lKey) => {
    return (
        <Link
            key={lKey}
            to={link.href}
        >
          <li
              className={`${classes['list-group-item']} ${classes['pl-3']} ${classes['py-2']}`}
              key={`li-${lKey}`}
              // style={props.userPreferenceStyles.menuSidebarItem}
          >
            <FontAwesomeIcon icon={link.faIcon} />
            {
              link.submenuItems.length ? (
                  <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes.submenu}`}>
                    {
                      link.submenuItems.map((submenuItem: any, smKey) => {
                        return (
                            <li
                                key={smKey}
                                className={`${classes['list-group-item']} ${classes['pl-4']}`}
                            >
                              <Link to={submenuItem.href}>{submenuItem.label}</Link>
                              <ul className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['sub-submenu']}`}>
                                {
                                  submenuItem.subSubmenuItems.map((subSubmenuItem: any, ssmKey: any) => {
                                    return (
                                        <li
                                            key={ssmKey}
                                            className={`${classes['list-group-item']} ${classes['pl-4']}`}
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
      <div className={classes.SidebarMenu}>
        <div data-component={'sidebar'}>
          <div className={`${classes.sidebar}`}>
            <ul
                className={`${classes['list-group']} ${classes['flex-column']} ${classes['d-inline-block']} ${classes['first-menu']}`}
                // style={props.userPreferenceStyles.menuSidebar}
            >
              {output}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default SidebarMenu;
