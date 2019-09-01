import * as React from 'react';

import SidebarMenuContainer from 'src/modules/Sidebar/containers/SidebarMenuContainer/SidebarMenuContainer';
import BookmarkEditCategoryForm from '../../forms/BookmarkEditCategoryForm/BookmarkEditCategoryForm';

import { IBookmarkCategory } from 'src/store/bookmarkCategory/types';

class BookmarkEditCategoryPage extends React.Component {
    protected category: IBookmarkCategory;
    
    public constructor(props: any) {
        super(props);

        // todo: get the actual category.
        this.category = {
            bookmarks: [],
            description: 'Some description',
            id: 0,
            name: 'Fake Category',
        };

        this.handleCancel = this.handleCancel.bind(this);
    }

    /**
     * handleCancel
     */
    public handleCancel() {
        // todo
    }

    public render() {
        return (
            <SidebarMenuContainer>
                <BookmarkEditCategoryForm
                    category={this.category}
                    handleCancel={this.handleCancel}
                />
            </SidebarMenuContainer>
        );
    }
}

export default BookmarkEditCategoryPage;
