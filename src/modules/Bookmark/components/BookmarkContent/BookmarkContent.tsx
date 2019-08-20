import * as React from 'react';

import {connect} from "react-redux";

import {Col, Row} from "reactstrap";
import NoContent from "../../../../components/elements/NoContent/NoContent";
import {fetchBookmarks} from "../../../../store/bookmarks/actions";
import {getSiteConfig} from "../../../../store/siteConfig/actions";

import BookmarkAddCategoryModalForm from "../../forms/BookmarkAddCategoryModalForm/BookmarkAddCategoryModalForm";
import BookmarkAddSpaceModalForm from "../../forms/BookmarkAddSpaceModalForm/BookmarkAddSpaceModalForm";
import BookmarkTableView from "./BookmarkTableView/BookmarkTableView";
import Categories from "./Categories/Categories";

import Tabs from "../../../../components/elements/Tabs/Tabs";

interface ICategoriesState {
    viewMode: string;
}

const CATEGORY_VIEW = 'CATEGORY_VIEW';
const TABLE_VIEW = 'TABLE_VIEW';

class BookmarkContent extends React.Component<any, ICategoriesState> {

    public async componentWillMount() {
        this.setState({viewMode: CATEGORY_VIEW});

        if (this.props.dispatch) {
            const bookmarks = await fetchBookmarks();
            this.props.dispatch(bookmarks);
        }
    }

    public render() {
        const classes = require('./BookmarkContent.scss');
        const self = this;

        const viewModeClick = (event: any) => {
            // todo: implement this.
            event.preventDefault();
            self.setState({
                viewMode: self.state.viewMode === CATEGORY_VIEW ? TABLE_VIEW : CATEGORY_VIEW
            });
        };

        if (!this.props.bookmarkSpaces.data || !this.props.bookmarkSpaces.data.data) {
            return <div>Loading bookmarks...</div>;
        }

        const spaces = this.props.bookmarkSpaces.data.data.bookmarkSpaces;
        let bkSpaceTabsData: object[];

        if (!spaces) {
           bkSpaceTabsData = [];
        }
        else {
            // todo: refactor this process data from the back-end.
            bkSpaceTabsData = spaces.map((space: any) => {
                return {
                    href: `/app/space/${space.id}`,
                    label: space.name,
                };
            });
        }

        return (
            <div>
                <Row
                    className={classes.ContainerHeader}
                    // style={this.props.userPreferenceStyles.spaceHeader}
                >
                    <Col md={8}>
                        <BookmarkAddCategoryModalForm params={{}}/>
                        <BookmarkAddSpaceModalForm />
                    </Col>
                    <Col md={4}>
                        <a
                            href="#"
                            onClick={viewModeClick}
                            // style={this.props.userPreferenceStyles.body}
                        >
                            Switch to {this.state.viewMode === CATEGORY_VIEW ? 'table' : 'category'} view
                        </a>
                    </Col>
                </Row>
                <div className={classes.Content}>
                    <Tabs data={bkSpaceTabsData} />
                    {
                        bkSpaceTabsData.length ? (this.state.viewMode === CATEGORY_VIEW ?
                                <Categories categories={spaces[0].bookmarkCategories} /> : <BookmarkTableView />)
                            : <NoContent message={getSiteConfig().data.labels.BOOKMARKS_NO_BOOKMARKS_LABEL} />
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        bookmarkSpaces: state.bookmarkReducer,
    };
}

export default connect(mapStateToProps)(BookmarkContent);
