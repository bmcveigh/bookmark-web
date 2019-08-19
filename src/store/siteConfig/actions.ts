import {GET_SITE_CONFIG} from "./types";

export function getSiteConfig() {
  return {
    data: {
      api: {
        baseUrl: 'http://bookmark-api.docksal',
        clientId: '8c730f21-4d34-42ea-aba6-e26f8470beb4',
      },
      labels: {
        "BOOKMARKS_NO_BOOKMARKS_LABEL": 'You do not have any bookmarks. To add your bookmarks, you must first create a space or import them from your browser.',
        "BOOKMARKS_NO_CATEGORIES_LABEL": 'You do not have any categories. To add your categories, you must click "Add Category" on the top left.',
        "GENERIC_ERROR_MESSAGE_LABEL": 'Well, this is embarrassing. Something went wrong.',
        "LOGIN_BUTTON_LABEL": 'Login',
        "LOGIN_MENU_ITEM_LABEL": 'Login',
        "LOGIN_PAGE_LABEL": 'Login to your account',
        "LOGIN_SUCCESS_LABEL": 'Login successful',
        "LOGOUT_MENU_ITEM_LABEL": 'Logout',
        "REGISTRATION_FIRST_NAME_LABEL": 'First name',
        "REGISTRATION_LAST_NAME_LABEL": 'Last name',
        "REGISTRATION_MENU_ITEM_LABEL": 'Register',
        "REGISTRATION_PAGE_LABEL": 'Create an account',
        "USER_PASSWORD_LABEL": 'Password',
        "USER_PASSWORD_PLACEHOLDER_LABEL": 'Enter in your password',
        "USER_USERNAME_LABEL": 'Username',
        "USER_USERNAME_PLACEHOLDER_LABEL": 'Enter in your username or email address',
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
