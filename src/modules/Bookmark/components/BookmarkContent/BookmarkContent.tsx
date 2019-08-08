import * as React from 'react';

import {connect} from "react-redux";

import {Col, Row} from "reactstrap";

import BookmarkAddCategoryModalForm from "../../forms/BookmarkAddCategoryModalForm/BookmarkAddCategoryModalForm";
import BookmarkAddSpaceModalForm from "../../forms/BookmarkAddSpaceModalForm/BookmarkAddSpaceModalForm";
import Categories from "./Categories/Categories";

interface ICategoriesState {
    viewMode: string;
}

const CATEGORY_VIEW = 'CATEGORY_VIEW';
const TABLE_VIEW = 'TABLE_VIEW';

class BookmarkContent extends React.Component<{}, ICategoriesState> {
    public componentWillMount(): void {
        this.setState({viewMode: CATEGORY_VIEW});
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
                    {this.state.viewMode === CATEGORY_VIEW ?
                        <Categories /> : <span>Table View here</span>}
                </div>
            </div>
        );
    }
}

export default connect()(BookmarkContent);
