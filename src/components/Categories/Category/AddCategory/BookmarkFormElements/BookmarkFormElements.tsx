import * as React from 'react';
import BookmarkFormElement from "./BookmarkFormElement/BookmarkFormElement";

interface IAddCategoryState {
    linkElements?: any;
}

class BookmarkFormElements extends React.Component<{}, IAddCategoryState> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            linkElements: [
                {
                    href: '#',
                    label: 'Link 1'
                },
                {
                    href: '#',
                    label: 'Link 2'
                },
                {
                    href: '#',
                    label: 'Link 2',
                }
            ]
        };
    }

    public render() {
        return this.state.linkElements.map((link: any, key: number) => {
            const hrefId = `link-href--${key}`;
            const labelId = `link-label--${key}`;

            return (
                <BookmarkFormElement
                    key={key}
                    linkElement={link}
                    hrefId={hrefId}
                    labelId={labelId}/>
            );
        });
    }

}

export default BookmarkFormElements;
