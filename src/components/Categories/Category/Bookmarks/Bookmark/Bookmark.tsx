import * as React from 'react';

interface IBookmarkProps {
    href: string;
    title: string;
}


class Bookmark extends React.Component<IBookmarkProps> {
    public render() {
        return (
            <p><a href={this.props.href}>{this.props.title}</a></p>
        );
    }
}

export default Bookmark;
