import * as React from 'react';

import {connect} from 'react-redux';
import NoContent from "../../../../../components/elements/NoContent/NoContent";
import {getSiteConfig} from "../../../../../store/siteConfig/actions";
import Category from './Category/Category';

interface IProps {
    categories: [{
        id: string;
        name: string;
        description: string;
    }];
}

interface ICategory {
    id: string;
    name: string;
    description: string;
    bookmarks: [];
};

function Categories(props: IProps) {
    const classes = require('./Categories.scss');

    if (!props.categories || !props.categories.map) {
        return <NoContent message={getSiteConfig().data.labels.BOOKMARKS_NO_CATEGORIES_LABEL} />
    }

    return (
        <div className={`${classes.BookmarkCategories}`}>
            {
                props.categories.map((category: ICategory, i: number) => (
                    <Category
                        key={i}
                        category={category}
                    />
                ))
            }
        </div>
    );
}

export default connect()(Categories);
