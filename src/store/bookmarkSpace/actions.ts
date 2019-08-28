import {
    ADD_BOOKMARK_SPACE,
    DELETE_BOOKMARK_SPACE,
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
