import * as React from 'react';

import {connect} from "react-redux";

import {Col, Row} from "reactstrap";

import BookmarkAddCategoryModalForm from "../../forms/BookmarkAddCategoryModalForm/BookmarkAddCategoryModalForm";
import BookmarkAddSpaceModalForm from "../../forms/BookmarkAddSpaceModalForm/BookmarkAddSpaceModalForm";

interface ICategoriesState {
    viewMode: string;
}

const CATEGORY_VIEW = 'CATEGORY_VIEW';
const TABLE_VIEW = 'TABLE_VIEW';

class Categories extends React.Component<{}, ICategoriesState> {
    public componentWillMount(): void {
        this.setState({viewMode: CATEGORY_VIEW});
    }

    public render() {
        const classes = require('./Categories.scss');
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
                <Row>
                    <div className={classes.Content}>
                        <Col md={12}>
                            {this.state.viewMode === CATEGORY_VIEW ?
                                <span>Category View here</span> : <span>Table View here</span>}
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default connect()(Categories);
