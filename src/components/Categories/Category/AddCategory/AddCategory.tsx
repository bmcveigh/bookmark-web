import * as React from 'react';
import {Card, CardBody, CardText, CardTitle, Form, Input} from "reactstrap";

import './AddCategory.css';
import BookmarkFormElements from "./BookmarkFormElements/BookmarkFormElements";

interface IAddCategoryState {
    linkElements?: any;
}

class AddCategory extends React.Component<{}, IAddCategoryState> {

    public render() {
        return (
            <Card className="add-category-card">
                <CardBody>
                    <Form>
                        <CardTitle className="card-title">
                            Add a new category
                        </CardTitle>
                        <CardText>
                            <Input
                                type="text"
                                placeholder={"Category Name"}
                            />
                            <BookmarkFormElements />
                        </CardText>
                    </Form>
                </CardBody>
            </Card>
        );
    }

}

export default AddCategory;
