import * as React from 'react';
import {Component} from 'react';

import {connect} from 'react-redux';
import AppForm from "../../../../components/containers/AppForm/AppForm";

import {IPropsReduxBase} from "../../../../components/interfaces";
import {IBookmarkCategory} from "../../../../store/bookmarks/types";
import {getSiteConfig} from "../../../../store/siteConfig/actions";
import {ISiteConfig} from "../../../../store/siteConfig/types";
import BookmarkFormWidget from '../../components/BookmarkFormWidget/BookmarkFormWidget';

import FormField from 'src/components/elements/FormField/FormField';

interface IProps extends IPropsReduxBase {
    category: IBookmarkCategory;
    styles?: any;
    handleCancel: (event: any) => void;
}

class BookmarkEditCategoryForm extends Component<IProps> {
    protected siteConfig: ISiteConfig;

    public constructor(props: IProps) {
        super(props);

        this.siteConfig = getSiteConfig();

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel= this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public async handleClick(event: any) {
        event.preventDefault();
    }

    public handleChange(event: any) {
        // todo
    }

    public handleCancel(event?: any) {
        this.props.handleCancel(event);
    }

    public handleSave() {
        this.handleCancel();
    }


    public render() {
        const classes = require('./BookmarkEditCategoryForm.scss');
        const category = this.props.category;
        // const globalStyles = this.props.styles ? this.props.styles.data : {};

        return (
           <AppForm
               className={classes.BookmarkEditCategoryForm}
           >
                <FormField
                    label={this.siteConfig.data.labels.BOOKMARKS_CATEGORY_NAME_LABEL}
                    name="name"
                    defaultValue={category.name}
                    placeholder="Enter category name"
                    onChange={this.handleChange}
                />
                <FormField
                    label={this.siteConfig.data.labels.BOOKMARKS_CATEGORY_DESCRIPTION_LABEL}
                    name="description"
                    defaultValue={category.description}
                    placeholder="Enter category description"
                    onChange={this.handleChange}
                />
                <BookmarkFormWidget category={category}
                                    handleCancel={this.handleCancel}
                                    handleSave={this.handleSave}
                />
            </AppForm>
        );
    }

}

// Retrieve data from store as props
function mapStateToProps(state: any) {
    return state;
}

export default connect(mapStateToProps)(BookmarkEditCategoryForm);
