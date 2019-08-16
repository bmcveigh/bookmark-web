import {GET_SITE_CONFIG} from "./types";

export function getSiteConfig() {
  return {
    data: {
      api: {
        baseUrl: 'http://bookmark-api.docksal',
        clientId: '8c730f21-4d34-42ea-aba6-e26f8470beb4',
      },
      labels: {
        "GENERIC_ERROR_MESSAGE_LABEL": 'Well, this is embarrassing. Something went wrong.',
        "LOGIN_BUTTON_LABEL": 'Login',
        "LOGIN_MENU_ITEM_LABEL": 'Login',
        "LOGIN_PAGE_LABEL": 'Login to your account',
        "LOGIN_SUCCESS_LABEL": 'Login successful',
        "LOGOUT_MENU_ITEM_LABEL": 'Logout',
      },
      tabData: {
        userProfilePages: [
          {
            href: '/app/user/profile',
            label: 'Profile'
          },
          {
            href: '/app/user/profile/appearance',
            label: 'Theme Settings'
          }
        ]
      }
    },
    type: GET_SITE_CONFIG
  };
}
