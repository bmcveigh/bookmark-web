import React from 'react';

import { connect } from 'react-redux';

import { Col, Row } from 'reactstrap';

import classes from './Homepage.css';
import Pricing from '../../components/Pricing/Pricing';
import Heading from '../../components/Heading/Heading';
import Benefits from '../../components/Benefits/Benefits';

function Homepage(props) {
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

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Homepage);
