import * as React from 'react';
import {Col, Row} from "reactstrap";
import FormField from "../../../../../components/elements/FormField/FormField";
import {IChangePropsBase} from "../../../../../components/interfaces";
import {IBookmark} from "../../../../../store/bookmarks/types";

interface IProps extends IChangePropsBase {
    bookmark?: IBookmark;
}

const BookmarkFormItem = (props: IProps) => (
    <Row>
        <Col md={4}>
            <FormField
                label="Label"
                name={`label--${props.bookmark ? props.bookmark.id : 'new'}`}
                placeholder="Label"
                onChange={props.onChange}
            />
        </Col>
        <Col md={8}>
            <FormField
                label="URL"
                name={`href--${props.bookmark ? props.bookmark.id : 'new'}`}
                placeholder="URL"
                onChange={props.onChange}
            />
        </Col>
    </Row>
);

export default BookmarkFormItem;
