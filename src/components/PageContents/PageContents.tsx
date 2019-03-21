import * as React from 'react';
import {Container} from 'reactstrap';
import Categories from "../Categories/Categories";
import AddCategoryBtn from "./AddCategoryBtn/AddCategoryBtn";

class PageContents extends React.Component {
    public render() {
        return (
            <Container fluid={true}>
                <h1>Bookmarks</h1>
                <AddCategoryBtn />
                <br /><br />
                <Categories />
            </Container>
        );
    }
}

export default PageContents;
