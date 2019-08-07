import * as React from 'react';

import {connect} from 'react-redux';

import {Col, Row} from 'reactstrap';

import Benefits from '../../components/Benefits/Benefits';
import Heading from '../../components/Heading/Heading';
import Pricing from '../../components/Pricing/Pricing';

function Homepage() {
    const classes = require('./Homepage.css');

    return (
        <div>
            <Row className={classes.HomepageSection}>
                <Col md={12}>
                    <Heading />
                </Col>
            </Row>
            <Row>
                <Col md={12} className={classes.HomepageSection}>
                    <Benefits />
                </Col>
            </Row>
            <Row>
                <Col md={12} className={classes.HomepageSection}>
                    <Pricing />
                </Col>
            </Row>
        </div>
    );
}

interface IStateHomepage {
    user: object;
}

function mapStateToProps(state: IStateHomepage) {
    return {
        user: state.user,
    };
}

export default connect(mapStateToProps)(Homepage);
