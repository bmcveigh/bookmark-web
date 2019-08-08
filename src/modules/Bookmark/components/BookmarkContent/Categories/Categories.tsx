import * as React from 'react';

import {connect} from 'react-redux';
import Category from './Category/Category';

function Categories() {
    const classes = require('./Categories.scss');

    return (
        <div className={`${classes.BookmarkCategories}`}>
            <Category
                category={{name: 'Sports', description: 'I am a dummy category'}}
            />
            <Category
                category={{name: 'News', description: 'I am a dummy category'}}
            />
        </div>
    );
}

export default connect()(Categories);
