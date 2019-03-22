import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

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
                <FormGroup key={key}>
                    <Label for={hrefId}>Path</Label>
                    <Input id={hrefId} value={link.href}/>

                    <Label for={labelId}>Label</Label>
                    <Input id={labelId} value={link.label}/>
                </FormGroup>
            );
        });
    }

}

export default BookmarkFormElements;
