import {
    ADD_BOOKMARK_CATEGORY, ADD_BOOKMARKS,
    IAddBookmarksPayload,
    IBookmarkSpace,
    LOAD_BOOKMARKS
} from "./types";

import { Services } from 'src/services/services';

export async function addBookmarkCategory(name: string, description: string, space: IBookmarkSpace) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Add a space when user clicks "Done" button.
    const options = {
        body: JSON.stringify({
            'data': [
                {
                  "meta": {
                      description,
                      name,
                      spaceId: space.internalId,
                  },
                }
              ],
        }),
        headers,
        method: 'POST',
    };

    // Add a bookmark category upon user confirmation.
    const data = await Services.authService().fetch(`api/v1/my-bookmarks`, options);

    return {
        data,
        type: ADD_BOOKMARK_CATEGORY,
    };
}

export async function fetchBookmarks() {
    return {
        data: await Services.authService().fetch('api/v1/my-bookmarks'),
        type: LOAD_BOOKMARKS
    };
}

export async function addBookmarks(payload: IAddBookmarksPayload) {
    return {
        data: [], // todo: do a fetch to endpoint when available.
        type: ADD_BOOKMARKS
    }
}
