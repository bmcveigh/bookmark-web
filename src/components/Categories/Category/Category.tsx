import * as React from 'react';
import {Card, CardBody,
    CardText, CardTitle} from "reactstrap";
import Bookmarks from "./Bookmarks/Bookmarks";

interface ICategoryProps {
    categoryTitle: string
}

class Category extends React.Component<ICategoryProps> {
    public render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.categoryTitle}</CardTitle>
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
