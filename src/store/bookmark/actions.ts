import {IBookmarkCategory} from "../bookmarkCategory/types";
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

export async function addBookmarks(formStateValues: any, category: IBookmarkCategory) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const payload: IAddBookmarksPayload = {data: [] as any, categoryId: category.id};

    Object.keys(formStateValues).map((key: string) => {
        if (key.indexOf('href') > -1) {
            const labelKey = key.replace('href', 'label');

            payload.data.push({
                meta: {
                    link: {
                        title: formStateValues[labelKey] || '',
                        uri: formStateValues[key],
                    },
                    notes: '',
                }
            });
        }
    });

    // Add a space when user clicks "Done" button.
    const options = {
        body: JSON.stringify(payload),
        headers,
        method: 'POST',
    };

    return {
        data: await Services.authService().fetch('api/v1/bookmark', options),
        type: ADD_BOOKMARKS
    }
}
