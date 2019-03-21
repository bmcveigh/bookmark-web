import * as React from 'react';
import {Card, CardBody,
    CardText, CardTitle} from "reactstrap";
import Bookmarks from "./Bookmarks/Bookmarks";

class Category extends React.Component {
    public render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Bookmark Category</CardTitle>
                        <CardText>
                            <Bookmarks />
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Category;
