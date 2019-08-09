import {GET_SITE_CONFIG} from "./types";

export function getSiteConfig() {
  return {
    data: {
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
