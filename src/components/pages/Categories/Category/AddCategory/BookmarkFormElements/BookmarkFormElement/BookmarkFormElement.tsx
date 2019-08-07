import * as React from 'react';
import {FormGroup, Input, Label} from "reactstrap";

interface IAddCategoryProps {
    linkElement: {
        href: string;
        label: string;
    }
    hrefId: string;
    labelId: string;
}

class BookmarkFormElement extends React.Component<IAddCategoryProps> {

    public render() {
        const hrefId = this.props.hrefId;
        const labelId = this.props.labelId;

        return (
            <FormGroup>
                <Label for={hrefId}>Path</Label>
                <Input id={hrefId} value={this.props.linkElement.href}/>

                <Label for={labelId}>Label</Label>
                <Input id={labelId} value={this.props.linkElement.label}/>
            </FormGroup>
        );
    }

}

export default BookmarkFormElement;
