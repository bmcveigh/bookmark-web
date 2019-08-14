import {GET_SITE_CONFIG} from "./types";

export function getSiteConfig() {
  return {
    data: {
      api: {
        baseUrl: 'http://bookmark-api.docksal',
      },
      labels: {
        "LOGIN_BUTTON_LABEL": 'Login',
        "LOGIN_PAGE_LABEL": 'Login to your account',
        "LOGIN_SUCCESS_LABEL": 'Login successful'
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
