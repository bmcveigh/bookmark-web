import * as React from 'react';

interface IBookmarkProps {
    href: string;
    title: string;
}


class Bookmark extends React.Component<IBookmarkProps> {
    public render() {
        return (
            <div><a href={this.props.href}>{this.props.title}</a></div>
        );
    }
}

export default Bookmark;
