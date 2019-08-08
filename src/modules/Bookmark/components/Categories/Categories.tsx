import * as React from 'react';

import {connect} from "react-redux";

import {Col, Row} from "reactstrap";

import BookmarkAddCategoryModalForm from "../../forms/BookmarkAddCategoryModalForm/BookmarkAddCategoryModalForm";

function Categories() {
    const classes = require('./Categories.scss');

    return (
        <div>
            <Row
                className={classes.ContainerHeader}
                // style={this.props.userPreferenceStyles.spaceHeader}
            >
                <Col md={8}>
                    <BookmarkAddCategoryModalForm params={{}} />
                </Col>
            </Row>
            <div className={classes.Content}>
                Content goes here
            </div>
        </div>
    );
}

export default connect()(Categories);
