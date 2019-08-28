import {
    ADD_BOOKMARKS,
    IAddBookmarksPayload,
    LOAD_BOOKMARKS
} from "./types";

import { Services } from 'src/services/services';

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
