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
                <Bookmark
                    href={"https://codesandbox.io/s/w02m7jm3q7"}
                    title="React Redux Tutorial with TypeScript"
                />
            </CardText>
        );
    }
}

export default Bookmarks;
