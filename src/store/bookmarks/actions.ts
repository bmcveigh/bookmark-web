import {ADD_BOOKMARK_CATEGORY, ADD_BOOKMARK_SPACE, DELETE_BOOKMARK_SPACE, LOAD_BOOKMARKS} from "./types";

import AuthService from 'src/services/auth/AuthService';
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

async function createParagraphEntity(name: string, description: string, space: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');

    const op1 = {
        body: JSON.stringify({
            data: {
                attributes: {
                    description: {value: description, format: 'basic_html'},
                    name,
                    parent_id: space.parentId,
                    parent_type: 'bookmark_space',
                },
                type: "paragraph--bookmark_category",
            },
        }),
        headers,
        method: 'POST',
    };

    return await new AuthService().fetch('api/paragraph/bookmark_category', op1);
}

export async function addBookmarkCategory(name: string, description: string, space: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');

    const paragraph = await createParagraphEntity(name, description, space);

    // Add a space when user clicks "Done" button.
    const options = {
        body: JSON.stringify({
            "data": [
                {
                    id: paragraph.data.id,
                    meta: {},
                    type: "paragraph--bookmark_category",
                }
            ]
        }),
        headers,
        method: 'POST',
    };

    // Add a bookmark category upon user confirmation.
    const data = await Services.authService().fetch(`api/bookmark_space/bookmark_space/${space.id}/relationships/bookmark_categories`, options);

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
