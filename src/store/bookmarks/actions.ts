import {
    ADD_BOOKMARK_CATEGORY,
    ADD_BOOKMARK_SPACE, ADD_BOOKMARKS,
    DELETE_BOOKMARK_SPACE, IAddBookmarksPayload,
    IBookmarkSpace,
    LOAD_BOOKMARKS
} from "./types";

import { Services } from 'src/services/services';

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
    const data = await Services.authService().fetch('api/bookmark_space/bookmark_space', options);

    return {
        data,
        type: ADD_BOOKMARK_SPACE,
    };
}

export async function deleteBookmarkSpace(uuid: string) {
    // Delete a space upon user confirmation.
    const options = {
        method: 'DELETE',
    };
    const data = await Services.authService().fetch(`api/bookmark_space/bookmark_space/${uuid}`, options);

    return {
        data,
        type: DELETE_BOOKMARK_SPACE,
    };
}

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
