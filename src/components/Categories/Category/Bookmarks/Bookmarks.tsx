import * as React from 'react';
import {CardText} from "reactstrap";
import Bookmark from "./Bookmark/Bookmark";

class Bookmarks extends React.Component {
    public render() {
        return (
            <CardText>
                <Bookmark href={"#"} title={"Google"}/>
                <Bookmark href={"#"} title={"Facebook"}/>
                <Bookmark href={"#"} title={"Twitter"}/>
                <Bookmark href={"#"} title={"Apple"}/>
            </CardText>
        );
    }
}

export default Bookmarks;
