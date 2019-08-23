import AuthService from "../../components/auth/AuthService";

import {ADD_BOOKMARK_CATEGORY, ADD_BOOKMARK_SPACE, DELETE_BOOKMARK_SPACE, LOAD_BOOKMARKS} from "./types";

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

export async function deleteBookmarkSpace(uuid: string) {
    // Delete a space upon user confirmation.
    const options = {
        method: 'DELETE',
    };
    const data = await new AuthService().fetch(`api/bookmark_space/bookmark_space/${uuid}`, options);

    return {
        data,
        type: DELETE_BOOKMARK_SPACE,
    };
}

export async function addBookmarkCategory(name: string, description: string, space: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');

    // Add a space when user clicks "Done" button.
    const options = {
        body: JSON.stringify({
            data: {
                attributes: {
                    description,
                    name,
                },
                type: "paragraph--bookmark_category",
            },
        }),
        headers,
        method: 'POST',
    };

    // Add a bookmark category upon user confirmation.
    const data = await new AuthService().fetch(`api/paragraph/bookmark_category`, options);

    return {
        data,
        type: ADD_BOOKMARK_CATEGORY,
    };
}

export async function fetchBookmarks() {
    return {
        data: await new AuthService().fetch('api/v1/my-bookmarks'),
        type: LOAD_BOOKMARKS
    };
}
