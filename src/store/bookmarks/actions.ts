import store from '..';
import AuthService from "../../components/auth/AuthService";

import {ADD_BOOKMARK, ADD_BOOKMARK_SPACE, LOAD_BOOKMARKS} from "./types";

export async function addBookmarkSpace(spaceName: string, ownerId: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');

    // Add a space when user clicks "Done" button.
    const options = {
        body: JSON.stringify({
            data: {
                attributes: {
                    name: spaceName,
                    owner_id: ownerId,
                },
                type: "bookmark_space--bookmark_space",
            },
        }),
        headers,
        method: 'POST',
    };
    const data = await new AuthService().fetch('api/bookmark_space/bookmark_space', options);

    return {
        data,
        type: ADD_BOOKMARK_SPACE,
    };
}

export function addBookmark() {
    store().dispatch({
        bookmark: {
            href: '#',
            label: 'Item'
        },
        type: ADD_BOOKMARK
    });
}

export async function fetchBookmarks() {
    return {
        data: await new AuthService().fetch('api/v1/my-bookmarks'),
        type: LOAD_BOOKMARKS
    };
}
