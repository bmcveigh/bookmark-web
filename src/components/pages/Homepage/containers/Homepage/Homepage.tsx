import * as React from 'react';

import { connect } from 'react-redux';

import { Col, Row } from 'reactstrap';

import * as classes './Homepage.css';

import * as Benefits from '../../components/Benefits/Benefits';
import * as Heading from '../../components/Heading/Heading';
import * as Pricing from '../../components/Pricing/Pricing';

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
